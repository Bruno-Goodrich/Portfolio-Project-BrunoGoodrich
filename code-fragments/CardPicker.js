const takeCard = () => {
    let updatedCards = [...cards];
    let removeCard = Math.floor(Math.random() * updatedCards.length)
    updatedCards.splice(removeCard,1)
    let cardsRemoved = cards.splice(removeCard,1)
    setHand([...hand,...cardsRemoved])
    let cpuRemoveCard = Math.floor(Math.random()* updatedCards.length)
    updatedCards.splice(cpuRemoveCard,1)
    let cpuCardsRemoved = cards.splice(cpuRemoveCard,1)
    setCpuHand([...cpuHand,...cpuCardsRemoved])
    setCards([...updatedCards])
}