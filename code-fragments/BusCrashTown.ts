useEffect(() => {
    // Update whenever data changes...
    let newPieCounts: { [key: string]: number } = {};
    let newPieData: PieDataRow[] = [];
    filteredData.forEach((row) => {
      if (!newPieCounts[row["City Town Name"]]) {
        newPieCounts[row["City Town Name"]] = 0; // initialize if not there...
      }
      newPieCounts[row["City Town Name"]]++; // Add one!
    });
    for (let key in newPieCounts) {
      newPieData.push({ name: key, crashes: newPieCounts[key] });
    }
    setPieData(newPieData);
    console.log("Set new pie data!", newPieData);
  }, [filteredData]);