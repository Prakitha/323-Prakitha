public class Address {
    String type;
    String doorNumber;
    String streetNumber;
    String cityName;
    String pinCode;
    
    public Address(String type, String doorNumber, String streetNumber, String cityName, String pinCode) {
        this.type = type;
        this.doorNumber = doorNumber;
        this.streetNumber = streetNumber;
        this.cityName = cityName;
        this.pinCode = pinCode;
    }
}
