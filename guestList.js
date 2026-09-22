var guestList = ["kofi","yusif","quansah"]

var guestName = prompt("Enter name here")

if (guestList.includes(guestName)) {
  alert(guestName + " is on the list.");
} else {
  alert(guestName + " is not on the list.");
  
}
