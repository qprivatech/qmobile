import Map "mo:core/Map";

module {
  type OldActor = {};

  type NewActor = {
    var orders : Map.Map<Text, {
      token : Text;
      order : {
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
      createdAt : Int;
      status : Text;
    }>;
  };

  public func migration(old : OldActor) : NewActor {
    ignore old;
    {
      var orders = Map.empty();
    };
  };
};
