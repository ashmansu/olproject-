const roles = document.querySelectorAll(".role");
const loginButton = document.getElementById("loginButton");

let selectedPage = "dashboard.html";
let selectedRole = "Admin";


/* =========================
   LOGIN / ROLE SELECTION
========================= */

roles.forEach(role => {

    role.addEventListener("click", function () {

        roles.forEach(r => {
            r.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedPage = this.dataset.page;

        selectedRole =
            this.dataset.role.charAt(0).toUpperCase() +
            this.dataset.role.slice(1);

        if (loginButton) {
            loginButton.textContent =
                "Login as " + selectedRole;
        }

    });

});


if (loginButton) {

    loginButton.addEventListener("click", function () {

        window.location.href = selectedPage;

    });

}


/* =========================
   CUSTOMER TRACK SHIPMENT
========================= */

function trackShipment() {

    const input =
        document.getElementById("trackingId");

    if (!input) return;

    const id =
        input.value.trim().toUpperCase();

    const result =
        document.getElementById("trackingResult");

    if (!result) return;

    if (id === "") {

        result.innerHTML = `
            <div class="card warning-alert">
                Please enter a shipment ID.
            </div>
        `;

        return;
    }

    if (typeof shipments === "undefined") {

        result.innerHTML = `
            <div class="card warning-alert">
                Shipment data could not be loaded.
            </div>
        `;

        return;
    }

    const shipment = shipments[id];

    if (!shipment) {

        result.innerHTML = `
            <div class="card warning-alert">
                <h3>Shipment Not Found</h3>
                <p>
                    No shipment was found with tracking ID
                    <strong>${id}</strong>.
                </p>
            </div>
        `;

        return;
    }

    result.innerHTML = `
        <div class="card tracking-result">

            <div class="shipment-top">

                <div>
                    <div class="product-icon">
                        ${shipment.icon}
                    </div>

                    <div>
                        <h3>${shipment.product}</h3>
                        <p>Tracking ID: ${id}</p>
                    </div>
                </div>

                <span class="status safe">
                    ${shipment.status}
                </span>

            </div>

            <div class="customer-info">

                <div>
                    <small>Temperature</small>
                    <strong>${shipment.temperature}</strong>
                </div>

                <div>
                    <small>Humidity</small>
                    <strong>${shipment.humidity}</strong>
                </div>

                <div>
                    <small>Freshness</small>
                    <strong>${shipment.freshness}</strong>
                </div>

                <div>
                    <small>Current Location</small>
                    <strong>${shipment.location}</strong>
                </div>

            </div>

            <div class="shipment-route">

                <p>
                    <strong>Origin:</strong>
                    ${shipment.origin}
                </p>

                <p>
                    <strong>Destination:</strong>
                    ${shipment.destination}
                </p>

            </div>

        </div>
    `;
}


/* =========================
   CUSTOMER MY SHIPMENTS
========================= */

function loadCustomerShipments() {

    const container =
        document.getElementById("customerShipments");

    if (!container) return;

    if (typeof shipments === "undefined") {

        container.innerHTML = `
            <div class="card warning-alert">
                Shipment data could not be loaded.
            </div>
        `;

        return;
    }

    const customerId = "CUST-001";

const customerShipments = Object.keys(shipments).filter(id => {
    return shipments[id].customer === customerId;
});

    let html = "";

    customerShipments.forEach(id => {

        const shipment = shipments[id];

        if (!shipment) return;

        html += `
            <div class="customer-shipment-card">

                <div class="shipment-top">

                    <div class="shipment-product">

                        <div class="product-icon">
                            ${shipment.icon}
                        </div>

                        <div>
                            <h3>${shipment.product}</h3>
                            <p>Tracking ID: ${id}</p>
                        </div>

                    </div>

                    <span class="status safe">
                        ${shipment.status}
                    </span>

                </div>

                <div class="customer-info">

                    <div>
                        <small>Temperature</small>
                        <strong>${shipment.temperature}</strong>
                    </div>

                    <div>
                        <small>Humidity</small>
                        <strong>${shipment.humidity}</strong>
                    </div>

                    <div>
                        <small>Freshness</small>
                        <strong>${shipment.freshness}</strong>
                    </div>

                    <div>
                        <small>Current Location</small>
                        <strong>${shipment.location}</strong>
                    </div>

                </div>

                <div class="shipment-route">

                    <p>
                        <strong>Origin:</strong>
                        ${shipment.origin}
                    </p>

                    <p>
                        <strong>Destination:</strong>
                        ${shipment.destination}
                    </p>

                </div>

            </div>
        `;

    });

    if (html === "") {

        html = `
            <div class="card">
                <h3>No Shipments</h3>
                <p>No shipments are currently assigned to your account.</p>
            </div>
        `;

    }

    container.innerHTML = html;
}


loadCustomerShipments();