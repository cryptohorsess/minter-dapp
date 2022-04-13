require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "CRYPTO S";
const description = "cs";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [


  // start of 100 legendary creation all 25 traits 
  {
    growEditionSizeTo: 1,
    layersOrder: [
      
     
  { name: "001 Backgroundl",
  options: {
    
    displayName: "001 Background",
  },
  },
  { name: "002 Bodyl",
        options: {
          
          displayName: "002 Body",
        },
        },
  
  
  { name: "003 Tailsl",
        options: {
          
          displayName: "003 Tail",
        },
        },
  
        { name: "004 Facel",
        options: {
          
          displayName: "004 Face",
        },
        },
  
  
        { name: "005 Manel",
        options: {
          
          displayName: "005 Mane",
        },
        },
  
  
  
        { name: "006 hoofsl",
        options: {
          
          displayName: "006 Hoofs",
        },
        },
  
        { name: "007 Front left sockl",
        options: {
          
          displayName: "007 Front left sock",
        },
        },
  
  
        { name: "008 Rear left sockl",
        options: {
          
          displayName: "008 Rear left sock",
        },
        },
  
  
        { name: "009 Front right sockl",
        options: {
          
          displayName: "009 Front right sock",
        },
        },
  
  
        { name: "010 Rear right sockl",
        options: {
          
          displayName: "010 Rear right sock ",
        },
        },
  
  
        { name: "011 Forehead blazel",
        options: {
          
          displayName: "011 Forehead blaze ",
        },
        },
  
  
  
  { name: "012 Front leg patchl",
        options: {
          
          displayName: "012 Front leg patch",
        },
        },
  
  
  { name: "013 Hind leg patchl",
        options: {
          displayName: "013 Hind leg patch",
        },
      },
      
  
  { name: "014 Eye colorl",
        options: {
          
          displayName: "014 Eye color",
        },
        },
  
  
  { name: "015 Bridall",
        options: {
          
          displayName: "015 Bridal",
        },
        },
  
  
  { name: "016 Adaptabilityl",
        options: {
          
          displayName: "016 Adaptability",
        },
        },
  
  
  { name: "017 Powerl",
        options: {
          
          displayName: "017 Power",
        },
        },
  
  
        { name: "018 Tempermentl",
        options: {
          
          displayName: "018 Temperment",
        },
        },
  
  
        { name: "019 Accelerationl",
        options: {
          
          displayName: "019 Acceleration",
        },
        },
  
  
        { name: "020 Responsel",
        options: {
          
          displayName: "020 Response",
        },
        },
  
  
  { name: "021 Toughnessl",
        options: {
          
          displayName: "021 Toughness",
        },
        },
  
  
  { name: "022 Staminal",
        options: {
          
          displayName: "022 Stamina ",
        },
        },
  
  
  { name: "023 Heartl",
        options: {
          
          displayName: "023 Heart",
        },
        },
  
  
  { name: "024 Intelligencel",
        options: {
          
          displayName: "024 Intelligence",
        },
        },
  
  { name: "025 Determinationl",
        options: {
          
          displayName: "025 Determination",
        },
        },
  
        
  
  { name: "Genderl" ,
  options: {
    
    displayName: "Gender",
  },
  },
  { name: "Rarityal",
  options: {
    
    displayName: "Rarity",
  },
  },
  { name: "Bloodlineal" ,
  options: {
    
    displayName: "Bloodline",
  },
  },
  { name: "Genotype" },
  
  { name: "Distancel" ,
  options: {
    
    displayName: "Distance",
  },
  },
  
  
  { name: "Groundl",
  options: {
    
    displayName: "Ground ",
  },
  },
  
   
  
    { name: "Jumpingl",
      options: {
          
        displayName: "Jumping",
  },
  },
  ]
        
  },

 
  
    {
  
      // start of 1000 epic creation 20-24 traits
  
      growEditionSizeTo:2,
      layersOrder: [
        // 200 horses with 20 traits 
    
      { name: "001 Backgrounde",
      options: {
        
        displayName: "001 Background",
      },
      },
      
      { name: "002 Bodye",
      options: {
        
        displayName: "002 Body",
      },
      },
      
      { name: "003 Tailse",
      options: {
        
        displayName: "003 Tail",
      },
      },
      
      { name: "004 Facee",
      options: {
        
        displayName: "004 Face",
      },
      },
      
      { name: "005 Manee",
      options: {
        
        displayName: "005 Mane",
      },
      },
      
      { name: "006 Hoofse",
      options: {
        
        displayName: "006 Hoofs",
      },
      },
      
      { name: "007 Front left socke",
      options: {
        
        displayName: "007 Front left sock",
      },
      },
      
      { name: "008 Rear left socke",
      options: {
        
        displayName: "008 Rear left sock",
      },
      },
      
      { name: "009 Front right socke",
      options: {
        
        displayName: "009 Front right sock",
      },
      },
      
      { name: "010 Rear right socke",
      options: {
        
        displayName: "010 Rear right sock",
      },
      },
      
      { name: "011 Forehead blazee",
      options: {
        
        displayName: "011 Forehead blaze",
      },
      },
      
      { name: "012 Front leg patche",
      options: {
        
        displayName: "012 Front leg patch",
      },
      },
      
      { name: "013 Hind leg patche",
      options: {
        
        displayName: "013 Hind leg patch",
      },
      },
      
      { name: "014 Eye colore",
      options: {
        
        displayName: "014 Eye color",
      },
      },
      
      { name: "015 Bridale",
      options: {
        
        displayName: "015 Bridal",
      },
      },
      
      { name: "016 Adaptabilitye",
      options: {
        
        displayName: "016 Adaptability",
      },
      },
      
      { name: "017 Powere",
      options: {
        
        displayName: "017 Power",
      },
      },
      
      { name: "018 Tempermente",
      options: {
        
        displayName: "018 Temperment",
      },
      },
      
      { name: "019 Acceleratione",
      options: {
        
        displayName: "019 Acceleration",
      },
      },
      
      { name: "020 Responsee",
      options: {
        
        displayName: "020 Response",
      },
      },
  
      
      { name: "Gendere" ,
  options: {
    
    displayName: "Gender",
  },
  },
  { name: "Rarity be",
  options: {
    
    displayName: "Rarity",
  },
  },
  { name: "Bloodline be" ,
  options: {
    
    displayName: "Bloodline",
  },
  },
  { name: "Genotypee" },
  
  
  { name: "Distancee" ,
  options: {
    
    displayName: "Distance",
  },
  },
  
  
  
  { name: "Grounde",
  options: {
    
    displayName: "Ground ",
  },
  },
  
  
   
  
    { name: "Jumpinge",
      options: {
          
        displayName: "Jumping",
  },
  },
      ],
    },
    {
  
   
    // 200 horses with 21 traits 
      growEditionSizeTo:3,
      layersOrder: [
       
        
        { name: "001 Backgrounde",
        options: {
          
          displayName: "001 Background",
        },
        },
        
        { name: "002 Bodye",
        options: {
          
          displayName: "002 Body",
        },
        },
        
        { name: "003 Tailse",
        options: {
          
          displayName: "003 Tail",
        },
        },
        
        { name: "004 Facee",
        options: {
          
          displayName: "004 Face",
        },
        },
        
        { name: "005 Manee",
        options: {
          
          displayName: "005 Mane",
        },
        },
        
        { name: "006 Hoofse",
        options: {
          
          displayName: "006 Hoofs",
        },
        },
        
        { name: "007 Front left socke",
        options: {
          
          displayName: "007 Front left sock",
        },
        },
        
        { name: "008 Rear left socke",
        options: {
          
          displayName: "008 Rear left sock",
        },
        },
        
        { name: "009 Front right socke",
        options: {
          
          displayName: "009 Front right sock",
        },
        },
        
        { name: "010 Rear right socke",
        options: {
          
          displayName: "010 Rear right sock",
        },
        },
        
        { name: "011 Forehead blazee",
        options: {
          
          displayName: "011 Forehead blaze",
        },
        },
        
        { name: "012 Front leg patche",
        options: {
          
          displayName: "012 Front leg patch",
        },
        },
        
        { name: "013 Hind leg patche",
        options: {
          
          displayName: "013 Hind leg patch",
        },
        },
        
        { name: "014 Eye colore",
        options: {
          
          displayName: "014 Eye color",
        },
        },
        
        { name: "015 Bridale",
        options: {
          
          displayName: "015 Bridal",
        },
        },
        
        { name: "016 Adaptabilitye",
        options: {
          
          displayName: "016 Adaptability",
        },
        },
        
        { name: "017 Powere",
        options: {
          
          displayName: "017 Power",
        },
        },
        
        { name: "018 Tempermente",
        options: {
          
          displayName: "018 Temperment",
        },
        },
        
        { name: "019 Acceleratione",
        options: {
          
          displayName: "019 Acceleration",
        },
        },
        
        { name: "020 Responsee",
        options: {
          
          displayName: "020 Response",
        },
        },
    
       
        { name: "021 Toughnesse",
        options: {
          
          displayName: "021 Toughness",
        },
        },
  
        { name: "Gendere" ,
    options: {
      
      displayName: "Gender",
    },
    },
    { name: "Rarity be",
    options: {
      
      displayName: "Rarity",
    },
    },
    { name: "Bloodline be" ,
    options: {
      
      displayName: "Bloodline",
    },
    },
    { name: "Genotypee" },
    
    
    { name: "Distancee" ,
    options: {
      
      displayName: "Distance",
    },
    },
    
    
    
    
    { name: "Grounde",
    options: {
      
      displayName: "Ground ",
    },
    },
    
    
    
      { name: "Jumpinge",
        options: {
            
          displayName: "Jumping",
        },
        },
      ],
    },
    {
  //200 horses with 22 traits 
  growEditionSizeTo:4,
  layersOrder: [
  
  
    { name: "001 Backgrounde",
    options: {
      
      displayName: "001 Background",
    },
    },
    
    { name: "002 Bodye",
    options: {
      
      displayName: "002 Body",
    },
    },
    
    { name: "003 Tailse",
    options: {
      
      displayName: "003 Tail",
    },
    },
    
    { name: "004 Facee",
    options: {
      
      displayName: "004 Face",
    },
    },
    
    { name: "005 Manee",
    options: {
      
      displayName: "005 Mane",
    },
    },
    
    { name: "006 Hoofse",
    options: {
      
      displayName: "006 Hoofs",
    },
    },
    
    { name: "007 Front left socke",
    options: {
      
      displayName: "007 Front left sock",
    },
    },
    
    { name: "008 Rear left socke",
    options: {
      
      displayName: "008 Rear left sock",
    },
    },
    
    { name: "009 Front right socke",
    options: {
      
      displayName: "009 Front right sock",
    },
    },
    
    { name: "010 Rear right socke",
    options: {
      
      displayName: "010 Rear right sock",
    },
    },
    
    { name: "011 Forehead blazee",
    options: {
      
      displayName: "011 Forehead blaze",
    },
    },
    
    { name: "012 Front leg patche",
    options: {
      
      displayName: "012 Front leg patch",
    },
    },
    
    { name: "013 Hind leg patche",
    options: {
      
      displayName: "013 Hind leg patch",
    },
    },
    
    { name: "014 Eye colore",
    options: {
      
      displayName: "014 Eye color",
    },
    },
    
    { name: "015 Bridale",
    options: {
      
      displayName: "015 Bridal",
    },
    },
    
    { name: "016 Adaptabilitye",
    options: {
      
      displayName: "016 Adaptability",
    },
    },
    
    { name: "017 Powere",
    options: {
      
      displayName: "017 Power",
    },
    },
    
    { name: "018 Tempermente",
    options: {
      
      displayName: "018 Temperment",
    },
    },
    
    { name: "019 Acceleratione",
    options: {
      
      displayName: "019 Acceleration",
    },
    },
    
    { name: "020 Responsee",
    options: {
      
      displayName: "020 Response",
    },
    },

   
    { name: "021 Toughnesse",
    options: {
      
      displayName: "021 Toughness",
    },
    },
  { name: "022 Staminae",
        options: {
          
          displayName: "022 Stamina",
        },
        },
  
  { name: "Gendere" ,
  options: {
  
  displayName: "Gender",
  },
  },
  { name: "Rarity be",
  options: {
  
  displayName: "Rarity",
  },
  },
  { name: "Bloodline be" ,
  options: {
  
  displayName: "Bloodline",
  },
  },
  { name: "Genotype" },
  
  
  { name: "Distancee" ,
  options: {
  
  displayName: "Distance",
  },
  },
  
  
  
  
  { name: "Grounde",
  options: {
  
  displayName: "Ground ",
  },
  },
  
  
  
  
  { name: "Jumpingl",
  options: {
  
  displayName: "Jumping",
  },
  },
  
  ],
  },
      
    
    {
  // horses with 23 traits 
        growEditionSizeTo:5,
        layersOrder: [
  
          
          { name: "001 Backgrounde",
          options: {
            
            displayName: "001 Background",
          },
          },
          
          { name: "002 Bodye",
          options: {
            
            displayName: "002 Body",
          },
          },
          
          { name: "003 Tailse",
          options: {
            
            displayName: "003 Tail",
          },
          },
          
          { name: "004 Facee",
          options: {
            
            displayName: "004 Face",
          },
          },
          
          { name: "005 Manee",
          options: {
            
            displayName: "005 Mane",
          },
          },
          
          { name: "006 Hoofse",
          options: {
            
            displayName: "006 Hoofs",
          },
          },
          
          { name: "007 Front left socke",
          options: {
            
            displayName: "007 Front left sock",
          },
          },
          
          { name: "008 Rear left socke",
          options: {
            
            displayName: "008 Rear left sock",
          },
          },
          
          { name: "009 Front right socke",
          options: {
            
            displayName: "009 Front right sock",
          },
          },
          
          { name: "010 Rear right socke",
          options: {
            
            displayName: "010 Rear right sock",
          },
          },
          
          { name: "011 Forehead blazee",
          options: {
            
            displayName: "011 Forehead blaze",
          },
          },
          
          { name: "012 Front leg patche",
          options: {
            
            displayName: "012 Front leg patch",
          },
          },
          
          { name: "013 Hind leg patche",
          options: {
            
            displayName: "013 Hind leg patch",
          },
          },
          
          { name: "014 Eye colore",
          options: {
            
            displayName: "014 Eye color",
          },
          },
          
          { name: "015 Bridale",
          options: {
            
            displayName: "015 Bridal",
          },
          },
          
          { name: "016 Adaptabilitye",
          options: {
            
            displayName: "016 Adaptability",
          },
          },
          
          { name: "017 Powere",
          options: {
            
            displayName: "017 Power",
          },
          },
          
          { name: "018 Tempermente",
          options: {
            
            displayName: "018 Temperment",
          },
          },
          
          { name: "019 Acceleratione",
          options: {
            
            displayName: "019 Acceleration",
          },
          },
          
          { name: "020 Responsee",
          options: {
            
            displayName: "020 Response",
          },
          },
      
         
          { name: "021 Toughnesse",
          options: {
            
            displayName: "021 Toughness",
          },
          },
        { name: "022 Staminae",
              options: {
                
                displayName: "022 Stamina",
              },
              },
         
          { name: "023 Hearte",
          options: {
            
            displayName: "023 Heart",
          },
          },
  
  
          { name: "Gendere" ,
  options: {
    
    displayName: "Gender",
  },
  },
  { name: "Rarity be",
  options: {
    
    displayName: "Rarity",
  },
  },
  { name: "Bloodline be" ,
  options: {
    
    displayName: "Bloodline",
  },
  },
  { name: "Genotype" },
  
  
  { name: "Distancee" ,
  options: {
    
    displayName: "Distance",
  },
  },
  
  
  
  
  { name: "Grounde",
  options: {
    
    displayName: "Ground ",
  },
  },
  
  
   
  
    { name: "Jumpinge",
      options: {
          
        displayName: "Jumping",
          },
          },
              ]
   
  
      },
      {// horses with 24 traits 
        growEditionSizeTo:6,
        layersOrder: [
          
          { name: "001 Backgrounde",
          options: {
            
            displayName: "001 Background",
          },
          },
          
          { name: "002 Bodye",
          options: {
            
            displayName: "002 Body",
          },
          },
          
          { name: "003 Tailse",
          options: {
            
            displayName: "003 Tail",
          },
          },
          
          { name: "004 Facee",
          options: {
            
            displayName: "004 Face",
          },
          },
          
          { name: "005 Manee",
          options: {
            
            displayName: "005 Mane",
          },
          },
          
          { name: "006 Hoofse",
          options: {
            
            displayName: "006 Hoofs",
          },
          },
          
          { name: "007 Front left socke",
          options: {
            
            displayName: "007 Front left sock",
          },
          },
          
          { name: "008 Rear left socke",
          options: {
            
            displayName: "008 Rear left sock",
          },
          },
          
          { name: "009 Front right socke",
          options: {
            
            displayName: "009 Front right sock",
          },
          },
          
          { name: "010 Rear right socke",
          options: {
            
            displayName: "010 Rear right sock",
          },
          },
          
          { name: "011 Forehead blazee",
          options: {
            
            displayName: "011 Forehead blaze",
          },
          },
          
          { name: "012 Front leg patche",
          options: {
            
            displayName: "012 Front leg patch",
          },
          },
          
          { name: "013 Hind leg patche",
          options: {
            
            displayName: "013 Hind leg patch",
          },
          },
          
          { name: "014 Eye colore",
          options: {
            
            displayName: "014 Eye color",
          },
          },
          
          { name: "015 Bridale",
          options: {
            
            displayName: "015 Bridal",
          },
          },
          
          { name: "016 Adaptabilitye",
          options: {
            
            displayName: "016 Adaptability",
          },
          },
          
          { name: "017 Powere",
          options: {
            
            displayName: "017 Power",
          },
          },
          
          { name: "018 Tempermente",
          options: {
            
            displayName: "018 Temperment",
          },
          },
          
          { name: "019 Acceleratione",
          options: {
            
            displayName: "019 Acceleration",
          },
          },
          
          { name: "020 Responsee",
          options: {
            
            displayName: "020 Response",
          },
          },
      
         
          { name: "021 Toughnesse",
          options: {
            
            displayName: "021 Toughness",
          },
          },
        { name: "022 Staminae",
              options: {
                
                displayName: "022 Stamina",
              },
              },
         
          { name: "023 Hearte",
          options: {
            
            displayName: "023 Heart",
          },
          },
  
       
        { name: "024 Intelligencee",
        options: {
          
          displayName: "024 Intelligence",
        },
        },
        { name: "Gendere" ,
  
        options: {
          
          displayName: "Gender",
        },
        },
        { name: "Rarity be",
        options: {
          
          displayName: "Rarity",
        },
        },
        { name: "Bloodline be" ,
        options: {
          
          displayName: "Bloodline",
        },
        },
        
        { name: "Genotype",
        options: {
          
          displayName: "Genotype",
        },
        },
        
        { name: "Distancee" ,
        options: {
          
          displayName: "Distance",
        },
        },
        
        
        
        
        { name: "Grounde",
        options: {
          
          displayName: "Ground ",
        },
        },
        
        
         
        
          { name: "Jumpinge",
            options: {
                
              displayName: "Jumping",
              },
            },
              
        ],
      
    
      },
      //start  of rare 
  {//500 horses with 16 traits
    growEditionSizeTo: 7,
    layersOrder: [
      
  { name: "001 Backgroundr",
    options: {
      
      displayName: "001 Background",
    },
    },
      
      { name: "002 Bodyr",
      options: {
        
        displayName: "002 Body",
      },
      },
      
      { name: "003 Tailsl",
      options: {
        
        displayName: "003 Tail",
      },
      },
      
      { name: "004 Face",
      options: {
        
        displayName: "004 Face",
      },
      },
     
      { name: "005 Maner",
      options: {
        
        displayName: "005 Mane",
      },
      },
      
      { name: "006 Hoofsr",
      options: {
        
        displayName: "006 Hoofs",
      },
      },
     
      { name: "007 Front  left sockr",
      options: {
        
        displayName: "007  Front  left sock",
      },
      },
      
      { name: "008 Rear left sockr",
      options: {
        
        displayName: "008 Rear left sock",
      },
      },
      
      { name: "009 Front right sockr",
      options: {
        
        displayName: "009 Front right sock",
      },
      },
    
      { name: "010 Rear right sockr",
      options: {
        
        displayName: "010 Rear right sock",
      },
      },
      
      { name: "011 Forehead blazer",
      options: {
        
        displayName: "011 Forehead blaze",
      },
      },
      
      { name: "012 Front leg patchr",
      options: {
        
        displayName: "012 Front leg patch",
      },
      },
      
      { name: "013 Hind leg patchr",
      options: {
        
        displayName: "013 Hind leg patch",
      },
      },
      
      { name: "014 Eye colorr",
      options: {
        
        displayName: "014 Eye color",
      },
      },
     
      { name: "015 Bridalr",
      options: {
        
        displayName: "015 Bridal",
      },
      },
      
      { name: "016 Adaptabilityr",
      options: {
        
        displayName: "016 Adaptability",
      },
      },
  
  
      { name: "Genderr" ,
      options: {
        
        displayName: "Gender",
      },
      },
      { name: "Raritydr",
      options: {
        
        displayName: "Rarity",
      },
      },
      { name: "Bloodline dr" ,
      options: {
        
        displayName: "Bloodline ",
      },
      },

      { name: "Genotyper" ,
       
      options: {
        
        displayName: "Genotype",
      },
      },
      
      { name: "Distance b" ,
      options: {
        
        displayName: "Distance",
      },
      },
      
    
      
      
      { name: "Groundr",
      options: {
        
        displayName: "Ground ",
      },
      },
      
     
       
      
        { name: "Jumpingr",
          options: {
              
            displayName: "Jumping",
          },
        },
          
    ],
  
      },
      {// 500 horses with 17 traits 
  
        growEditionSizeTo:8,
        layersOrder: [
          
       
          { name: "001 Backgroundr",
          options: {
            
            displayName: "001 Background",
          },
          },
            
            { name: "002 Bodyr",
            options: {
              
              displayName: "002 Body",
            },
            },
            
            { name: "003 Tailsl",
            options: {
              
              displayName: "003 Tail",
            },
            },
            
            { name: "004 Face",
            options: {
              
              displayName: "004 Face",
            },
            },
           
            { name: "005 Maner",
            options: {
              
              displayName: "005 Mane",
            },
            },
            
            { name: "006 Hoofsr",
            options: {
              
              displayName: "006 Hoofs",
            },
            },
           
            { name: "007 Front  left sockr",
            options: {
              
              displayName: "007  Front  left sock",
            },
            },
            
            { name: "008 Rear left sockr",
            options: {
              
              displayName: "008 Rear left sock",
            },
            },
            
            { name: "009 Front right sockr",
            options: {
              
              displayName: "009 Front right sock",
            },
            },
          
            { name: "010 Rear right sockr",
            options: {
              
              displayName: "010 Rear right sock",
            },
            },
            
            { name: "011 Forehead blazer",
            options: {
              
              displayName: "011 Forehead blaze",
            },
            },
            
            { name: "012 Front leg patchr",
            options: {
              
              displayName: "012 Front leg patch",
            },
            },
            
            { name: "013 Hind leg patchr",
            options: {
              
              displayName: "013 Hind leg patch",
            },
            },
            
            { name: "014 Eye colorr",
            options: {
              
              displayName: "014 Eye color",
            },
            },
           
            { name: "015 Bridalr",
            options: {
              
              displayName: "015 Bridal",
            },
            },
            
            { name: "016 Adaptabilityr",
            options: {
              
              displayName: "016 Adaptability",
            },
            },
        
        
        { name: "017 Powerr",
        options: {
          
          displayName: "017 Power",
        },
        },
  
        { name: "Genderr" ,
        options: {
          
          displayName: "Gender",
        },
        },
        { name: "Raritydr",
        options: {
          
          displayName: "Rarity",
        },
        },
        { name: "Bloodline dr" ,
        options: {
          
          displayName: "Bloodline ",
        },
        },
       
        { name: "Genotyper" ,
       
      options: {
        
        displayName: "Genotype",
      },
      },
        
        { name: "Distance b" ,
        options: {
          
          displayName: "Distance",
        },
        },
        
        
        
        
        { name: "Groundr",
        options: {
          
          displayName: "Ground ",
        },
        },
        
       
         
        
          { name: "Jumpingr",
            options: {
                
              displayName: "Jumping",
                },
              },
                
          ],
  
  
      },
      {//horses with 18 traits  
        growEditionSizeTo: 9,
        layersOrder: [
          
          { name: "001 Backgroundr",
          options: {
            
            displayName: "001 Background",
          },
          },
            
            { name: "002 Bodyr",
            options: {
              
              displayName: "002 Body",
            },
            },
            
            { name: "003 Tailsl",
            options: {
              
              displayName: "003 Tail",
            },
            },
            
            { name: "004 Face",
            options: {
              
              displayName: "004 Face",
            },
            },
           
            { name: "005 Maner",
            options: {
              
              displayName: "005 Mane",
            },
            },
            
            { name: "006 Hoofsr",
            options: {
              
              displayName: "006 Hoofs",
            },
            },
           
            { name: "007 Front  left sockr",
            options: {
              
              displayName: "007  Front  left sock",
            },
            },
            
            { name: "008 Rear left sockr",
            options: {
              
              displayName: "008 Rear left sock",
            },
            },
            
            { name: "009 Front right sockr",
            options: {
              
              displayName: "009 Front right sock",
            },
            },
          
            { name: "010 Rear right sockr",
            options: {
              
              displayName: "010 Rear right sock",
            },
            },
            
            { name: "011 Forehead blazer",
            options: {
              
              displayName: "011 Forehead blaze",
            },
            },
            
            { name: "012 Front leg patchr",
            options: {
              
              displayName: "012 Front leg patch",
            },
            },
            
            { name: "013 Hind leg patchr",
            options: {
              
              displayName: "013 Hind leg patch",
            },
            },
            
            { name: "014 Eye colorr",
            options: {
              
              displayName: "014 Eye color",
            },
            },
           
            { name: "015 Bridalr",
            options: {
              
              displayName: "015 Bridal",
            },
            },
            
            { name: "016 Adaptabilityr",
            options: {
              
              displayName: "016 Adaptability",
            },
            },
        
        
        { name: "017 Powerr",
        options: {
          
          displayName: "017 Power",
        },
        },
        
        { name: "018 Tempermentr",
        options: {
          
          displayName: "018 Temperment",
        },
        },
  
        { name: "Genderr" ,
        options: {
          
          displayName: "Gender",
        },
        },
        { name: "Raritydr",
        options: {
          
          displayName: "Rarity",
        },
        },
        { name: "Bloodline dr" ,
        options: {
          
          displayName: "Bloodline ",
        },
        },
        
        { name: "Genotyper" ,
       
      options: {
        
        displayName: "Genotype",
      },
      },
        
        { name: "Distance b" ,
        options: {
          
          displayName: "Distance",
        },
        },
        
        { name: "Groundr",
        options: {
          
          displayName: "Ground ",
        },
        },
        
        { name: "Jumpingr",
            options: {
                
              displayName: "Jumping",
                },
              },
                
          ],
  
       },
        {// horses with 19 traits 
          growEditionSizeTo: 10,
          layersOrder: [
       
            
            { name: "001 Backgroundr",
          options: {
            
            displayName: "001 Background",
          },
          },
            
            { name: "002 Bodyr",
            options: {
              
              displayName: "002 Body",
            },
            },
            
            { name: "003 Tailsl",
            options: {
              
              displayName: "003 Tail",
            },
            },
            
            { name: "004 Face",
            options: {
              
              displayName: "004 Face",
            },
            },
           
            { name: "005 Maner",
            options: {
              
              displayName: "005 Mane",
            },
            },
            
            { name: "006 Hoofsr",
            options: {
              
              displayName: "006 Hoofs",
            },
            },
           
            { name: "007 Front  left sockr",
            options: {
              
              displayName: "007  Front  left sock",
            },
            },
            
            { name: "008 Rear left sockr",
            options: {
              
              displayName: "008 Rear left sock",
            },
            },
            
            { name: "009 Front right sockr",
            options: {
              
              displayName: "009 Front right sock",
            },
            },
          
            { name: "010 Rear right sockr",
            options: {
              
              displayName: "010 Rear right sock",
            },
            },
            
            { name: "011 Forehead blazer",
            options: {
              
              displayName: "011 Forehead blaze",
            },
            },
            
            { name: "012 Front leg patchr",
            options: {
              
              displayName: "012 Front leg patch",
            },
            },
            
            { name: "013 Hind leg patchr",
            options: {
              
              displayName: "013 Hind leg patch",
            },
            },
            
            { name: "014 Eye colorr",
            options: {
              
              displayName: "014 Eye color",
            },
            },
           
            { name: "015 Bridalr",
            options: {
              
              displayName: "015 Bridal",
            },
            },
            
            { name: "016 Adaptabilityr",
            options: {
              
              displayName: "016 Adaptability",
            },
            },
        
        
        { name: "017 Powerr",
        options: {
          
          displayName: "017 Power",
        },
        },
        
        { name: "018 Tempermentr",
        options: {
          
          displayName: "018 Temperment",
        },
        },
  
          
            { name: "019 Accelerationr",
            options: {
              
              displayName: "019 Acceleration",
            },
            },
  
            { name: "Genderr" ,
            options: {
              
              displayName: "Gender",
            },
            },
            { name: "Raritydr",
            options: {
              
              displayName: "Rarity",
            },
            },
            { name: "Bloodline dr" ,
            options: {
              
              displayName: "Bloodline ",
            },
            },
            
            
            { name: "Genotyper" ,
       
      options: {
        
        displayName: "Genotype",
      },
      },
            { name: "Distance b" ,
            options: {
              
              displayName: "Distance",
            },
            },
          
            { name: "Groundr",
            options: {
              
              displayName: "Ground ",
            },
            },
            
            { name: "Jumpingr",
                options: {
                    
                  displayName: "Jumping",
              },
            },
              
        ],
    },
    {
      growEditionSizeTo: 11,
      layersOrder: [
     
        
        { name: "001 Backgroundc",
        options: {
          
          displayName: "001 Background",
        },
        },
      
        { name: "002 Bodyc",
        options: {
          
          displayName: "002 Body",
        },
        },
        
        { name: "003 Tailsc",
        options: {
          
          displayName: "003 Tail",
        },
        },
        
        { name: "004 Facec",
        options: {
          
          displayName: "004 Face",
        },
        },
        
        { name: "005 Manec",
        options: {
          
          displayName: "005 Mane",
        },
        },
        
        { name: "006 hoofsc",
        options: {
          
          displayName: "006 Hoofs",
        },
        },
        
        { name: "007 Front left sockc",
        options: {
          
          displayName: "007 Front left sock",
        },
        },
        
        { name: "008 Rear left sockc",
        options: {
          
          displayName: "008 Rear left sock",
        },
        },
        
        { name: "009 Front right sockc",
        options: {
          
          displayName: "009 Front right sock",
        },
        },
        
        { name: "010 Rear right sockc",
        options: {
          
          displayName: "010 Rear right sock",
        },
        },
       
        { name: "011 Forehead blazec",
        options: {
          
          displayName: "011 Forehead blaze",
        },
        },
        
        { name: "012 Front leg patchc",
        options: {
          
          displayName: "012 Front leg patch",
        },
        },
        
        { name: "013 Hind leg patchc",
        options: {
          
          displayName: "013 Hind leg patch",
        },
        },
        
        { name: "014 Eye colorc",
        options: {
          
          displayName: "014 Eye color",
        },
        },
       
        { name: "015 Bridalc",
        options: {
          
          displayName: "015 Bridal",
        },
        },
        
       
  { name: "Genderc" ,
        options: {
          
          displayName: "Gender",
        },
        },
        { name: "Rarity dc",
        options: {
          
          displayName: "Rarity",
        },
        },
        { name: "Bloodline dc" ,
        options: {
          
          displayName: "Bloodline ",
        },
        },
        { name: "Genotypec" },
        
        
        { name: "Distancec" ,
        options: {
          
          displayName: "Distance",
        },
        },
        
       
        
        
        
       
         
        
          { name: "Jumpingc",
            options: {
                
              displayName: "Jumping",
          
      },
    },
      
],
  
  },

  ];
const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2135,
  height: 2159,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://xyz.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'CRYPTO ';
const CONTRACT_SYMBOL = 'Cp';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x121c742B7BE716C0308621f7c385C5DA0FF3a681';
const TREASURY_ADDRESS = '0x121c742B7BE716C0308621f7c385C5DA0FF3a681';
const MAX_SUPPLY = 11; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.00001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 5; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-14T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE ="2022-04-13T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x121c742B7BE716C0308621f7c385C5DA0FF3a681"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xa9Cca31860a083ecD02E0B370C752E489DEE9ea9",]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = ""; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "unknown"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreihya7luokk64sqbwyalgebccq5zl2abdpytmkdszbqc37k32nj4gi"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
