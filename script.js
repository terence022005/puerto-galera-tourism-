// ================= BOOKING MODAL =================

function openBooking() {

    document.getElementById("bookingModal").style.display = "flex";

}


function closeBooking() {

    document.getElementById("bookingModal").style.display = "none";

}


// Close modal when clicking outside

window.addEventListener("click", function(event) {

    const modal = document.getElementById("bookingModal");

    if (event.target === modal) {

        closeBooking();

    }

});


// ================= SELECT PACKAGE =================

function selectPackage(packageName) {

    openBooking();

    document.getElementById("bookingPackage").value = packageName;

}


// ================= BOOKING =================

function submitBooking(event) {

    event.preventDefault();

    const name =
        document.getElementById("bookingName").value;

    const packageName =
        document.getElementById("bookingPackage").value;

    const guests =
        document.getElementById("guests").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour booking inquiry for " +
        packageName +
        " for " +
        guests +
        " guest(s) has been received.\n\nOur team will contact you soon."
    );

    event.target.reset();

    closeBooking();

}


// ================= CONTACT INQUIRY =================

function submitInquiry(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const packageName =
        document.getElementById("package").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour inquiry regarding " +
        packageName +
        " has been submitted successfully."
    );

    event.target.reset();

}


// ================= GALLERY =================

document.querySelectorAll(".gallery img").forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});