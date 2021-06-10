console.log('Spaceship');
let ship1;
let last;

const space = function(){
    ship1 = new Starship;
}

document.getElementById('starShip').addEventListener('click', space);




class Starship {
    constructor(){
        this.runningEngine = false;
        this.position = 0;
        this.x = 0;
        this.y = 0;
        this.generateHtmlRef();
        this.startEngine();
        this.setStartShip();
        this.setMoveShip();
        this.moveShip();
        this.moveClickedShip();

        
    }
    //Generating a random ship, creating ships per every click on button
    generateHtmlRef(){
        let ships = ['img/blue-spaceship.png', 'img/green-spaceship.png', 'img/red-spaceship.png' ];
        const randomShip = ships[(Math.random() * ships.length) | 0];
        this.ref = document.createElement('img');
        this.ref.src = randomShip;
        this.ref.classList.add('ship');
        document.querySelector('.list').appendChild(this.ref);
    }

    //If clicked on a ship, moving that ship, else move the last ship
    setStartShip(){
        if(this.ref.addEventListener('click', () => {
            let a = this.ref.classList.add('ship--start');
            if(this.ref.classList == 'car--start'){
                last.runningEngine = false;
            }
        }))
            this.startEngine()
       } 
       

     

    startEngine(){
        if(!this.runningEngine){
            this.runningEngine = true;
            this.setMoveShip();
        }
        
    }
    //Moving the element on pressing down keys
    setMoveShip(){
        document.addEventListener('keydown', (event) => {
            this.runningEngine = true;
            let a = document.getElementsByClassName('ship--start');
                if(a.length > 0){
                   return this.moveClickedShip(event.key);
                }
                return this.moveShip(event.key);
        }
        )
    }

    //Selecting always the last img element of div
    moveShip(direction){
        last = document.querySelector('div img:last-child');
        
    
       
        if(direction === 'ArrowRight'){
            this.x += 2;
            last.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowLeft'){
            this.x -= 2;
            last.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowUp'){
            this.y -= 2;
            last.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowDown'){
            this.y += 2;
            last.style.transform = `translate(${this.x}px, ${this.y}px`;
        }

     }
     //Selecting the clicked element which contains a class:ship--start
     moveClickedShip(direction){
         const  a = document.querySelector('.ship--start');
         
        if(direction === 'ArrowRight'){
            this.x += 2;
            a.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowLeft'){
            this.x -= 2;
            a.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowUp'){
            this.y -= 2;
            a.style.transform = `translate(${this.x}px, ${this.y}px`;
        } else if(direction === 'ArrowDown'){
            this.y += 2;
            a.style.transform = `translate(${this.x}px, ${this.y}px`;
        }
     }

         }
       