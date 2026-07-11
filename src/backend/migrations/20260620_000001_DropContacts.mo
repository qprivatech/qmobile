import List "mo:core/List";

module {
  type OldActor = {
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

  type NewActor = {};

  public func migration(old : OldActor) : NewActor {
    ignore old;
    {};
  };
}
