const customers = {
    "CUST-001": {
        name: "Fresh Foods Jaipur",
        location: "Jaipur"
    },

    "CUST-002": {
        name: "Daily Dairy Delhi",
        location: "Delhi"
    }
};


const transporters = {
    "TR-001": {
        name: "Transporter 1",
        vehicleId: "VH-204"
    },

    "TR-002": {
        name: "Transporter 2",
        vehicleId: "VH-205"
    }
};


const vehicles = {
    "VH-204": {
        type: "Refrigerated Truck",
        capacity: "5 Ton",
        status: "Active"
    },

    "VH-205": {
        type: "Refrigerated Truck",
        capacity: "5 Ton",
        status: "Active"
    }
};


const shipments = {

    "FT-1024": {
        product: "Apples",
        icon: "🍎",
        origin: "Delhi",
        destination: "Jaipur",
        temperature: "4.8°C",
        humidity: "72%",
        freshness: "91%",
        location: "Jaipur",
        status: "In Transit",
        transporter: "TR-001",
        customer: "CUST-001"
    },

    "FT-1025": {
        product: "Oranges",
        icon: "🍊",
        origin: "Nagpur",
        destination: "Delhi",
        temperature: "5.2°C",
        humidity: "70%",
        freshness: "89%",
        location: "Agra",
        status: "In Transit",
        transporter: "TR-002",
        customer: "CUST-002"
    },

    "FT-1026": {
        product: "Milk",
        icon: "🥛",
        origin: "Indore",
        destination: "Jaipur",
        temperature: "3.9°C",
        humidity: "68%",
        freshness: "94%",
        location: "Kota",
        status: "In Transit",
        transporter: "TR-001",
        customer: "CUST-001"
    }
};