const vaccinate = (population : Patient[], params : SimulationParameters) =>{
    //get unvaxxed patients from population
    let unvaxxed = population.filter(
      (p) =>!p.vaccinated
    )
    if (unvaxxed.length == 0){
      return null
    }
    else{
      let randomIndex= Math.floor(Math.random()*unvaxxed.length)
      unvaxxed[randomIndex].vaccinated = true
    }
  }