ti.output('What region of the US is it in?');
let region = await ti.readChoice(['North East','South','Midwest','West','Alaska/Hawaii'])
if (region == 'North East') {
 ti.clear();
 ti.showImage('Images/North East.PNG')
 ti.output('Is it a part of New England?');
  let newEngland = await ti.readYesOrNo ();
  if (newEngland == true){
   ti.clear();
   ti.showImage('Images/North East.PNG')
   ti.output('Is it north of Massachusetts?');
    let northMass = await ti.readYesOrNo();
    if (northMass == true){
     ti.clear ();
     ti.showImage('Images/North East.PNG')
     ti.output('Is it Maine?');
      let maine = await ti.readYesOrNo();
      if (maine == true){
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('The state was Maine...now reset the page and go again!');