import byuiCourse from "./course.mjs";
import { populateSections } from "./sections.mjs";
import { setTitles, renderSectionsTable } from "./output.mjs";


document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSectionsTable(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSectionsTable(byuiCourse.sections);
});

setTitles(byuiCourse);
populateSections(byuiCourse.sections);
renderSectionsTable(byuiCourse.sections);