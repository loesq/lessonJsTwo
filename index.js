const typeUser = "admin"; // user, guest, bot
switch (typeUser) {
  case "admin":
    console.log("Вы админ");
    break;
  case "user":
    console.log("Вы пользователь");
    break;
  case "guest":
    console.log("Вы гость");
    break;
  case "bot":
    console.log("Вы робот!!");
    break;
  default:
    console.log("who?");
    break;
}