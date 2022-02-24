import { printError, printREsult } from "./printResult";
import getDateDiff from "./getDateDiff";
import { timedCount, doTimer, topCount } from "./timer";

const form = document.getElementById("datecalc");

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firsDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  if (!firsDate || !secondDate) {
    printError("Oooooopppsss - введите текст!!!!");
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate);
    printREsult(dateDiff);
  }
};
