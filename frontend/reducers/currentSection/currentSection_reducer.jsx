export default function currentSectionReducer (state="Home", action) {
  switch(action.type){
    case "SECTION_SELECTED":
     return action.payload
  }
  return state;
}
