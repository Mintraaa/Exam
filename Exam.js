class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  totleBooking = 0;
  constructor(name, address, email, phone, accountType, totleBooking) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
    this.totleBooking = totleBooking;
  }
  toString() {
    return `Person[name = ${this.name}, 
        address = ${this.address},
        email = ${this.email},
        phone = ${this.phone},
        accountType = ${this.accountType},
        totleBooking = ${this.totleBooking}]`;
  }
}
/*
class Receptionist extends Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone,  accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  createBooking() {
    return this.Booking;
  }
}
*/

class Account {
  username = null;
  password = "";
  status = "";
  constructor(name, password, status) {
    this.name = name;
    this.password = password;
    this.status = status;
  }
  login(login) {
    this.login = login;
  }
  resetPassword(resetPassword) {
    this.resetPassword = resetPassword;
  }
  toString() {
    return `Account[${this.username.toString()}, password = ${
      this.password
    }, status = ${this.status}, total = ${this.getAccount()}]`;
  }
}


class Hotel {
  room = "";
  location = "";
  constructor(room, location) {
    this.room = room;
    this.location = location;
  }
  getRooms() {
    return this.room;
  }
  addnewRooms(room) {
    return this.room;
  }
  toString() {
    return `Hotel[room = ${this.room}, 
        location = ${this.location}]`;
  }
}

class Room extends Hotel {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(roomAvailable) {
    this.roomAvailab = roomAvailable;
  }
  createRoom() {
    return this.Booking;
  }
}

class RoomBooking {
  reservationNumber = "";
  starData = "";
  durationDays = 0;
  status = "";
  createdBy = "";
  constructor(reservationNumber, starData, durationDays,status,createdBy ) {
    this.reservationNumber = reservationNumber;
    this.starData = starData;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
}
}

class Guest {
  totelRoomBooked = 0;
  constructor (totelRoomBooked){
    this.totelRoomBooked = totelRoomBooked;
  }
}

class Notification {
  notification = 0;
  create = "";
  content = "";
  sender = "";
  recipient = "";
  constructor(notification, create, content, sender, recipient) {
    this.notification = notification;
    this.create = create;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }
}

const main =() => {
  const person1 = new Person("Bob","Chumphon","bob1@gmail.com","0977777776","Guest","0");
  const person2 = new Person("Alice", "Bangkok", "alice0@gmail.com","0977777775","receptionist","0");
  const person3 = new Person("Catherin", "Bangkok", "cat2@gmail.com","0977777774","receptionist", "");
  const person4 = new Person("David", "Chumphon", "deik5@gmail.com","0977777778","Guest","");
  const hotel1 = new Hotel("Room1","Doule Bed Pool View","100", "Available");
  /*
  const receptionist1 = new Receptionist("");
  const receptionist2 = new Receptionist("");
  const gest1 = new Guest(1000);
  const gest2 = new Guest(1001);
  */
  console.log(person1, person2, person3, person4.toString());
};
main();