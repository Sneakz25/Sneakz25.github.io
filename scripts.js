const nugget = document.getElementById("nugget");

const nuggetBouncer = document.getElementById("nuggetBouncer");

const nuggetTotalText = document.getElementById("nuggetTotalText");
const nuggetsPerSecondText = document.getElementById("nuggetsPerSecondText");

var totalNuggets = 0;
var nuggetsPerSecond = 0;
var nuggetsPerClick = 1;

const ketchupContainer = document.getElementById("ketchupContainer");
const buyKetchupButton = document.getElementById("buyKetchup");
const ketchupQuantityText = document.getElementById("ketchupQuantity");
const ketchupPriceText = document.getElementById("ketchupPrice");
var ketchupQuantity = 0;
const ketchupBaseCost = 20;
const ketchupCostScaling = 0.1;
const ketchupCPSPerQuantity = 0.1;

const spriteContainer = document.getElementById("spriteContainer");
const buySpriteButton = document.getElementById("buySprite");
const spriteQuantityText = document.getElementById("spriteQuantity");
const spritePriceText = document.getElementById("spritePrice");
var spriteQuantity = 0;
const spriteBaseCost = 200;
const spriteCostScaling = 0.1;
const spriteCPSPerQuantity = 0.5;

const friesContainer = document.getElementById("friesContainer");
const buyFriesButton = document.getElementById("buyFries");
const friesQuantityText = document.getElementById("friesQuantity");
const friesPriceText = document.getElementById("friesPrice");
var friesQuantity = 0;
const friesBaseCost = 700;
const friesCostScaling = 0.1;
const friesCPSPerQuantity = 5.0;

const mcflurryContainer = document.getElementById("mcflurryContainer");
const buyMcFlurryButton = document.getElementById("buyMcFlurry");
const McFlurryQuantityText = document.getElementById("McFlurryQuantity");
const McFlurryPriceText = document.getElementById("McFlurryPrice");
var McFlurryQuantity = 0;
const McFlurryBaseCost = 1000;
const McFlurryCostScaling = 0.1;
const McFlurryCPSPerQuantity = 10.0;

const BMContainer = document.getElementById("BMContainer");
const buyBMButton = document.getElementById("buyBM");
const BMQuantityText = document.getElementById("BMQuantity");
const BMPriceText = document.getElementById("BMPrice");
var BMQuantity = 0;
const BMBaseCost = 5000;
const BMCostScaling = 0.1;
const BMCPSPerQuantity = 25.0;

const SBContainer = document.getElementById("SBContainer");
const buySBButton = document.getElementById("buySB");
const SBQuantityText = document.getElementById("SBQuantity");
const SBPriceText = document.getElementById("SBPrice");
var SBQuantity = 0;
const SBBaseCost = 10000;
const SBCostScaling = 0.1;
const SBCPSPerQuantity = 50.0;

const TBContainer = document.getElementById("TBContainer");
const buyTBButton = document.getElementById("buyTB");
const TBQuantityText = document.getElementById("TBQuantity");
const TBPriceText = document.getElementById("TBPrice");
var TBQuantity = 0;
const TBBaseCost = 50000;
const TBCostScaling = 0.1;
const TBCPSPerQuantity = 100.0;

const HMContainer = document.getElementById("HMContainer");
const buyHMButton = document.getElementById("buyHM");
const HMQuantityText = document.getElementById("HMQuantity");
const HMPriceText = document.getElementById("HMPrice");
var HMQuantity = 0;
const HMBaseCost = 100000;
const HMCostScaling = 0.1;
const HMCPSPerQuantity = 300.0;

const SSContainer = document.getElementById("SSContainer");
const buySSButton = document.getElementById("buySS");
const SSQuantityText = document.getElementById("SSQuantity");
const SSPriceText = document.getElementById("SSPrice");
var SSQuantity = 0;
const SSBaseCost = 500000;
const SSCostScaling = 0.1;
const SSCPSPerQuantity = 500.0;

const FTContainer = document.getElementById("FTContainer");
const buyFTButton = document.getElementById("buyFT");
const FTQuantityText = document.getElementById("FTQuantity");
const FTPriceText = document.getElementById("FTPrice");
var FTQuantity = 0;
const FTBaseCost = 1000000;
const FTCostScaling = 0.1;
const FTCPSPerQuantity = 1000.0;


nuggetTotalText.innerHTML = "0 nuggets";
nuggetsPerSecondText.innerHTML = "0 nuggets per second";

setInterval(updateNuggetTotal, 1000);

function updateNuggetTotal(){
    totalNuggets += nuggetsPerSecond;
    nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
}

function clickNugget(){
    totalNuggets += nuggetsPerClick;
    nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";

    nuggetBouncer.classList.remove("nuggetBouncer");
    void nuggetBouncer.offsetWidth;
    nuggetBouncer.classList.add("nuggetBouncer");


    const damageText= document.createElement("div");
    damageText.textContent = "+" + nuggetsPerClick;
    document.body.appendChild(damageText);
    damageText.className = "damage-text";

    damageText.style.left = e.clientX + "px";
    damageText.style.top = e.clientY + "px";
    damageText.style.position = "absolute";
    

    damageText.addEventListener("animationend", () => {text.remove()});
}

function purchaseKetchup(){
    let actualCost = ketchupBaseCost * (1+(ketchupCostScaling * ketchupQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += ketchupCPSPerQuantity 
        ketchupQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
        ketchupQuantityText.innerHTML = ketchupQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        ketchupPriceText.innerHTML = Math.floor(ketchupBaseCost * (1+(ketchupCostScaling * ketchupQuantity)));
        
        let newKetchupIcon = document.createElement("img");
        newKetchupIcon.src = "images/ketchup.png";
        newKetchupIcon.style.width = "8%";
        newKetchupIcon.style.marginTop = Math.random() * 10;
        ketchupContainer.appendChild(newKetchupIcon);
    }

}
function purchaseSprite(){
    let actualCost = spriteBaseCost * (1+(spriteCostScaling * spriteQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += spriteCPSPerQuantity 
        spriteQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
        spriteQuantityText.innerHTML = spriteQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        spritePriceText.innerHTML = Math.floor(spriteBaseCost * (1+(spriteCostScaling * spriteQuantity)));
      
        let newSpriteIcon = document.createElement("img");
        newSpriteIcon.src = "images/sprite.png";
        newSpriteIcon.style.width = "8%";
        newSpriteIcon.style.marginTop = Math.random() * 10;
        spriteContainer.appendChild(newSpriteIcon);
    }

}
function purchaseFries(){
    let actualCost = friesBaseCost * (1+(friesCostScaling * friesQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += friesCPSPerQuantity 
        friesQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
        friesQuantityText.innerHTML = friesQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        friesPriceText.innerHTML = Math.floor(friesBaseCost * (1+(friesCostScaling * friesQuantity)));
        
        let newFriesIcon = document.createElement("img");
        newFriesIcon.src = "images/fries.png";
        newFriesIcon.style.width = "8%";
        newFriesIcon.style.marginTop = Math.random() * 10;
        friesContainer.appendChild(newFriesIcon);
    }
}

    function purchaseMcFlurry(){
        let actualCost = McFlurryBaseCost * (1+(McFlurryCostScaling * McFlurryQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += McFlurryCPSPerQuantity 
            McFlurryQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            McFlurryQuantityText.innerHTML = McFlurryQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            McFlurryPriceText.innerHTML = Math.floor(McFlurryBaseCost * (1+(McFlurryCostScaling * McFlurryQuantity)));
            
            let newMcFlurryIcon = document.createElement("img");
        newMcFlurryIcon.src = "images/McFlurry.png";
        newMcFlurryIcon.style.width = "8%";
        newMcFlurryIcon.style.marginTop = Math.random() * 10;
        mcflurryContainer.appendChild(newMcFlurryIcon);
        }
    }

    function purchaseBM(){
        let actualCost = BMBaseCost * (1+(BMCostScaling * BMQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += BMCPSPerQuantity 
            BMQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            BMQuantityText.innerHTML = BMQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            BMPriceText.innerHTML = Math.floor(BMBaseCost * (1+(BMCostScaling * BMQuantity)));

            let newBMIcon = document.createElement("img");
        newBMIcon.src = "images/big mac.png";
        newBMIcon.style.width = "8%";
        newBMIcon.style.marginTop = Math.random() * 10;
        BMContainer.appendChild(newBMIcon);
        }
    }

    function purchaseSB(){
        let actualCost = SBBaseCost * (1+(SBCostScaling * SBQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += SBCPSPerQuantity 
            SBQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            SBQuantityText.innerHTML = SBQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            SBPriceText.innerHTML = Math.floor(SBBaseCost * (1+(SBCostScaling * SBQuantity)));

            let newSBIcon = document.createElement("img");
            newSBIcon.src = "images/spicy buff.png";
            newSBIcon.style.width = "8%";
            newSBIcon.style.marginTop = Math.random() * 10;
            SBContainer.appendChild(newSBIcon);
        }
    }

    function purchaseTB(){
        let actualCost = TBBaseCost * (1+(TBCostScaling * TBQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += TBCPSPerQuantity 
            TBQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            TBQuantityText.innerHTML = TBQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            TBPriceText.innerHTML = Math.floor(TBBaseCost * (1+(TBCostScaling * TBQuantity)));

            let newTBIcon = document.createElement("img");
            newTBIcon.src = "images/tbbq.png";
            newTBIcon.style.width = "8%";
            newTBIcon.style.marginTop = Math.random() * 10;
            TBContainer.appendChild(newTBIcon);
        }
    }

    function purchaseHM(){
        let actualCost = HMBaseCost * (1+(HMCostScaling * HMQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += HMCPSPerQuantity 
            HMQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            HMQuantityText.innerHTML = HMQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            HMPriceText.innerHTML = Math.floor(HMBaseCost * (1+(HMCostScaling * HMQuantity)));

            let newHMIcon = document.createElement("img");
            newHMIcon.src = "images/honey must.png";
            newHMIcon.style.width = "8%";
            newHMIcon.style.marginTop = Math.random() * 10;
            HMContainer.appendChild(newHMIcon);
        }
    }

    function purchaseSS(){
        let actualCost = SSBaseCost * (1+(SSCostScaling * SSQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += SSCPSPerQuantity 
            SSQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            SSQuantityText.innerHTML = SSQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            SSPriceText.innerHTML = Math.floor(SSBaseCost * (1+(SSCostScaling * SSQuantity)));

            let newSSIcon = document.createElement("img");
            newSSIcon.src = "images/sns.png";
            newSSIcon.style.width = "8%";
            newSSIcon.style.marginTop = Math.random() * 10;
            SSContainer.appendChild(newSSIcon);
        }
    }

    function purchaseFT(){
        let actualCost = FTBaseCost * (1+(FTCostScaling * FTQuantity));
    
        if (totalNuggets >= actualCost){
            totalNuggets -= actualCost;
            nuggetsPerSecond += FTCPSPerQuantity 
            FTQuantity++;
            nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
            FTQuantityText.innerHTML = FTQuantity;
            nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
            FTPriceText.innerHTML = Math.floor(FTBaseCost * (1+(FTCostScaling * FTQuantity)));

            let newFTIcon = document.createElement("img");
            newFTIcon.src = "images/fourty.png";
            newFTIcon.style.width = "8%";
            newFTIcon.style.marginTop = Math.random() * 10;
            FTContainer.appendChild(newFTIcon);
        }
    }

nugget.addEventListener("click", clickNugget);
buyKetchupButton.addEventListener("click", purchaseKetchup);
buySpriteButton.addEventListener("click", purchaseSprite);
buyFriesButton.addEventListener("click", purchaseFries);
buyMcFlurryButton.addEventListener("click", purchaseMcFlurry);
buyBMButton.addEventListener("click", purchaseBM);
buySBButton.addEventListener("click", purchaseSB);
buyTBButton.addEventListener("click", purchaseTB);
buyHMButton.addEventListener("click", purchaseHM);
buySSButton.addEventListener("click", purchaseSS);
buyFTButton.addEventListener("click", purchaseFT);