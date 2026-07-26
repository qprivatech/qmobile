module {
  public type OrderMessage = {
    productId : Text;
    productName : Text;
    quantity : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    streetNo : Text;
    postalCode : Text;
    city : Text;
    securityProfile : Text;
    securityNotes : Text;
    contractAccepted : Bool;
    privacyAccepted : Bool;
    lang : Text;
  };

  public type OrderRecord = {
    token : Text;
    order : OrderMessage;
    createdAt : Int;
    status : Text;
  };

  public type OrderSummary = {
    productName : Text;
    quantity : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    streetNo : Text;
    postalCode : Text;
    city : Text;
    securityProfile : Text;
    price : Text;
    lang : Text;
  };

  public type ConfirmError = {
    #notFound;
    #expired;
    #alreadyConfirmed;
  };

  public type ConfirmResult = {
    #ok : OrderSummary;
    #err : ConfirmError;
  };
};
