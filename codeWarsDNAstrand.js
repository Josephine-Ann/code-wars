const DNAstrand = (dna) => {
    const dnaa = dna.split("")
      let a = []
      dnaa.forEach((element) => {
    if (element === "T") {
      a.push("A")
    } else if (element === "A") {
      a.push("T")
    } else if (element === "G") {
      a.push("C")
    } else {
      a.push("G")
    }
      })
    return a.join("")
      }
    
    console.log(DNAstrand("GTAT"))
    
    