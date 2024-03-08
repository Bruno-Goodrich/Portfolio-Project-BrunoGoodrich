const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'Barnstable County') {
      setFilteredData(csvData.filter(
        (row)=>barnstableCounty.includes(row['City Town Name'])
      ))
    }
    if (selectedOption === 'Berkshire County') {
      setFilteredData(csvData.filter(
        (row)=>berkshireCounty.includes(row['City Town Name'])
      ))
    }
    if (selectedOption === 'Bristol County') {
      setFilteredData(csvData.filter(
        (row)=>bristolCounty.includes(row['City Town Name'])
      ))