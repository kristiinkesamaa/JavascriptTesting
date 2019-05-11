describe('Address Book', function () {

    // Luuakse muutujad, et oleks igale testile kättesaadavad
    var addressBook,
        thisContact;

    // Enne igat testi läheb beforeEach käima
    beforeEach(function () {

        // Aadressiraamat
        addressBook = new AddressBook();

        // Kontakt, mida lisame aadressiraamatusse
        thisContac = new Contact();
    });

    // Kontakti lisamise test
    it('should be able to add a contact', function () {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    // Kontakti kustutamise test
    it('should be able to delete a contact', function () {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async Address Book', function () {

    // Luuakse aadressiraamatu muutuja ja selle väärtus on uus aadressiraamat
    var addressBook = new AddressBook();

    beforeEach(function (done) {

        // Käivitatakse asünkroonne getInitialContacts funktsioon ja antakse selle callbacki done() funktsioon
        addressBook.getInitialContacts(function () {
            done();
        });
    });

    // Antakse testile sisse done, et oleks arusaadav, et on asükroonne test
    it('should grab initial contacts', function (done) {

        // Testitakse, et kas beforeEach funktsioon sai muutuja väärtuseks true
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});