export const updatePopulation = (
    population: Patient[],
    params: SimulationParameters
  ): Patient[] => {
    // Run updatePatient once per patient to create *new* patients for new round.
    let newPopulation = population.map((patient) =>
      updatePatient(patient, population, params)
    );
    for (let i=0; i<10;i++){
      vaccinate(newPopulation, params)
    }
    roundCounter ++
    
    return newPopulation;
  };