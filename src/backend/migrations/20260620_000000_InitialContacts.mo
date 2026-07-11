import Map "mo:core/Map";
import List "mo:core/List";

module {
  type OldActor = {};

  type NewActor = {
    var contacts : List.List<{
      id : Nat;
      firstName : Text;
      lastName : Text;
      phone : Text;
      email : ?Text;
      createdAt : Nat;
    }>;
    var nextId : { var nextId : Nat };
  };

  public func migration(old : OldActor) : NewActor {
    ignore old;
    {
      var contacts = List.empty<{
        id : Nat;
        firstName : Text;
        lastName : Text;
        phone : Text;
        email : ?Text;
        createdAt : Nat;
      }>();
      var nextId = { var nextId = 1 };
    };
  };
};
