pragma solidity ^0.5.0;

// Inventory management interface
interface InventoryManagement {
    
    function list() external returns(               // List devices in inventory
        int[] memory deviceIDs
    );
    
    function add(                                   // Add device to inventory
        string calldata name,
        string calldata owner,
        string calldata location
    ) external;
    
    function remove(                                // Remove device from inventory
        int deviceID
    ) external;
    
    function modify(                                // Modify device info
        int deviceID,
        string calldata newName,
        string calldata newOwner,
        string calldata newLocation
    ) external;
    
    function lookUp(                                // Look up device info
        int deviceID
    ) external view returns(
        string memory name,
        string memory owner,
        string memory location,
        int state                                   // State 1=inStore, 2=checkedOut, 3=pending
    );
    
    function checkout(                              // Checkout device from inventory
        int deviceID
    ) external;
    
    function requestCheckin(                        // Request device checkin
        int deviceID
    ) external;
    
    function checkin(                               // Checkin device into inventory
        int deviceID
    ) external;
}


// Inventory interactions
contract Inventory is InventoryManagement {
    
    address public inventoryManager;                // Address of inventory manager
    mapping(int => Device) public inventory;        // Device inventory
    int public deviceID;                            // Next device ID
    int public deviceNum;                           // Number of existing devices
    int[] public removedID;                         // List of removed device IDs
    int[] public existingID;                        // List of existing device IDs

    modifier isManager() {                          // Check if caller is manager
        require(msg.sender == inventoryManager);
        _;
    }

    event deviceInfo(                               // List info of devices
        int id,
        string name,
        string owner,
        string location,
        int state
    );

    constructor() public {                          // Set caller as manager
        inventoryManager = msg.sender;
    }
    
    function validateID(int _deviceID) public view returns(bool) {      // Validate device ID
        bool valid;
        
        if(_deviceID >= deviceID || deviceID == 0) {
            valid = false;
        } else if(deviceID == deviceNum) {
            valid = true;
        } else {
            for(int i=0; i<deviceID-deviceNum; i++) {                   // Check if device ID has not been removed
                if(_deviceID == removedID[uint(i)]) {
                    valid = false;
                    break;
                }
                valid = true;
            }
        }
        
        return valid;
    }

    function list() public returns(int[] memory deviceIDs) {            // List devices in inventory
        delete existingID;
        
        for(int i=0; i<deviceID; i++) {                                 // Emit info and return ID of existing devices
            if(validateID(i)) {
                emit deviceInfo(
                    i,
                    inventory[i].name(),
                    inventory[i].owner(),
                    inventory[i].location(),
                    inventory[i].state()
                );
                existingID.push(i);
            }
        }
        return existingID;
    }

    function add(                                                       // Add device to inventory
        string memory _name,
        string memory _owner,
        string memory _location
    ) public isManager {
        inventory[deviceID] = new Device(_name, _owner, _location);
        deviceID++;
        deviceNum++;
    }
    
    function remove(int _deviceID) public isManager {                   // Remove device from inventory
        require(validateID(_deviceID));
        delete inventory[_deviceID];
        removedID.push(_deviceID);
        deviceNum--;
    }
    
    function modify(                                                    // Modify device in inventory
        int _deviceID,
        string memory newName,
        string memory newOwner,
        string memory newLocation
    ) public isManager {
        require(validateID(_deviceID));
        inventory[_deviceID].modify(newName, newOwner, newLocation);
    }
    
    function lookUp(int _deviceID) public view returns(                 // Look up device in inventory
        string memory name,
        string memory owner,
        string memory location,
        int state
    ) {
        require(validateID(_deviceID));
        return(inventory[_deviceID].getInfo());
    }
    
    function checkout(int _deviceID) public isManager {                 // Checkout device from inventory
        require(validateID(_deviceID));
        inventory[_deviceID].checkout();
    }
    
    function requestCheckin(int _deviceID) public {                     // Request device checkin
        require(validateID(_deviceID));
        inventory[_deviceID].requestCheckin();
    }
    
    function checkin(int _deviceID) public isManager {                  // Checkin device into inventory
        require(validateID(_deviceID));
        inventory[_deviceID].checkin();
    }
}


// Device interactions
contract Device {
    
    string public name;                             // Name/type of device
    string public owner;                            // Owner of device
    string public location;                         // Location of device
    int public state;                               // State of device  1=inStore, 2=checkedOut, 3=pending

    constructor(                                    // Create device with given name, owner and location
        string memory _name,
        string memory _owner,
        string memory _location
    ) public {
        name = _name;
        owner = _owner;
        location = _location;
        state = 1;
    }
    
    function modify(                                // Modify device info
        string memory _name,
        string memory _owner,
        string memory _location
    ) public {
        name = _name;
        owner = _owner;
        location = _location;
    }
    
    function getInfo() public view returns(         // Get device info
        string memory _name,
        string memory _owner,
        string memory _location,
        int _state
    ) {
        return(name, owner, location, state);
    }
    
    function checkout() public {                    // Checkout device
        require(state == 1);
        state = 2;
    }
    
    function requestCheckin() public {              // Request device checkin
        require(state == 2);
        state = 3;
    }
    
    function checkin() public {                     // Checkin device
        require(state == 3);
        state = 1;
    }
}