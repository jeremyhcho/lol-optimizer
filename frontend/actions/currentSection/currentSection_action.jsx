export function sectionSelector(section){
  console.log("this is the section",section);
  return{
    type: "SECTION_SELECTED",
    payload: section
  }
}
