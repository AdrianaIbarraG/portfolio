let divCards = document.getElementById("portfolio-cards"); 
let divSkills = document.getElementById("row-boxes1");
let divSoftSkills = document.getElementById("row-boxes2"); 
let divFormation = document.getElementById("formation-card"); 

/* ******************* Class Skill *********************** */
class Skill {
    type="";
    logo=""; 
    title="";  
    id = 0;
    static total = 0; 

    constructor (type, logo, title){
        this.type = type;
        this.logo = logo; 
        this.title = title;
        Skill.total++; 
        this.id = Skill.total;
    } /* Information Constructor */

    static printTotal (){
        console.log(Skill.total);
    }

    /* HTML element to attach info */
    printInfo(div){
        div.insertAdjacentHTML("beforeend",
            `
            <div class="row-boxes1_${this.id}">
                <div class="col smallbox fa-fade">
                    <div class="boxImg ${this.type} ${this.logo}"></div>
                    <div class="boxName fa-fade">${this.title}</div>
                </div>
            </div>`);
    }
}/* Class Skills */


/* ******************* Class SoftSkills *********************** */

class SoftSkill extends Skill{
    constructor (type, logo, title){
        super (type, logo, title);
    }/*  constructor soft Skill */

    /* HTML element to attach info */
    printInfo(div){
        div.insertAdjacentHTML("beforeend",
            `
            <div class="row-boxes2_${this.id}">
                <div class="col smallbox fa-fade">
                    <div class="boxImg ${this.type} ${this.logo}"></div>
                    <div class="boxName fa-fade">${this.title}</div>
                </div>
            </div>`);
    }
}/* class SoftSkill */


/* ******************* Class Information *********************** */
class Information {
    img=""; 
    title="";  
    repository="";
    live=""; 
    id = 0;
    static total = 0; 

    constructor (img, title, repository, live){
        this.img = img; 
        this.title = title;
        this.repository = repository;
        this.live = live; 
        Information.total++; 
        this.id = Information.total;
    } /* Information Constructor */

    static printTotal (){
        console.log(Information.total);
    }

    /* HTML element to attach info */
    printInfo(div){
        console.log(this.img, this.title, this.repository, this.live)
        div.insertAdjacentHTML("beforeend",
            `
            <div class="portfolio-cards" id="portfolio-cards_${this.id}">
                <div class="flip-card" id="flip-card">
                                <div class="face card-front">
                                    <img src="${this.img}" alt="project picture">
                                    <h3>${this.title}</h3>
                                </div>
                                <div class="face card-back">
                                    <h3>${this.title}</h3>
                                    <a href="${this.repository}" target="_blank" class="btnPortfolio">Repository</a>
                                    <a href="${this.live}" target="_blank" class="btnPortfolio">Demo</a>
                                </div>
                </div> 
            </div>`);
    }

}/* Class Information */

/* ******************* Class Formation *********************** */
class Formation {
        img=""; 
        title="";  
        school="";
        date=""; 
        description=""; 
        id = 0;
        static total = 0; 
    
        constructor (img, title, school, date, description){
            this.img = img; 
            this.title = title;
            this.school = school;
            this.date = date; 
            this.description = description; 
            Information.total++; 
            this.id = Information.total;
        } /* Information Constructor */
    
        static printTotal (){
            console.log(Information.total);
        }
    
        /* HTML element to attach info */
        printInfo(div){
            console.log(this.img, this.title, this.school, this.date, this.description)
            div.insertAdjacentHTML("beforeend",
                `
                <li class="formation-card" id="formation-card_${this.id}">
                      <img src="${this.img}" class="formation-card__image" alt="school-logo" />
                      <div class="formation-card__overlay">
                        <div class="formation-card__header">
                          <svg class="formation-card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <div class="formation-card__header-text">
                                <h3 class="formation-card__title">${this.title}</h3>   
                                <span class="formation-card__tagline">${this.school}</span>      
                            </div>
                        </div>
                        <span class="formation-card_date">${this.date}</span>   
                        <p class="formation-card__description">${this.description}</p>
                      </div>  
                </li>`);
        }
}/* class formation */


/* ******************* Class Skill: Information to print *********************** */
let skillsArray = [];
/* skills(type, logo, title) */
skillsArray.push (
    new Skill ("fa-brands", "fa-html5", "HTML"),
    new Skill ("fa-brands", "fa-css3", "CSS"),
    new Skill ("fa-brands", "fa-js", "JavaScript"),
    new Skill ("fa-brands", "fa-java", "Java"),
    new Skill ("fa-brands", "fa-github", "GitHub"),
    new Skill ("fa-solid", "fa-database", "MySQL"),
    new Skill ("fa-brands", "fa-aws", "Aws")
); 

skillsArray.forEach(e=> e.printInfo(divSkills));

/* ******************* Class SoftSkill: Information to print *********************** */
let softSkillArray=[];
/* softSkills(type, logo, title) */
softSkillArray.push (
    new SoftSkill("fa-solid", "fa-people-group", "Teamwork"),
    new SoftSkill("fa-solid", "fa-eye", "Detail Oriented"),
    new SoftSkill("fa-solid", "fa-comments", "Communication"),
    new SoftSkill("fa-solid", "fa-bullseye", "Persistance"),
    new SoftSkill("fa-solid", "fa-handshake", "Responsability"),
    new SoftSkill("fa-solid", "fa-seedling", "Growth Mindset"),
    new SoftSkill("fa-solid", "fa-circle-check", "Discpline")
);

softSkillArray.forEach(e=> e.printInfo(divSoftSkills));

/* ******************* Class Information: Information to print *********************** */
let info=[];
/* info(img, title, repository, live) */
info.push( 
    new Information("assets/portfolio/textEncryptor.png", "Text Encryptor", "https://github.com/AdrianaIbarraG/ChallengeOneEncryptor", "https://adrianaibarrag.github.io/ChallengeOneEncryptor/"),
    new Information("assets/portfolio/secretNumber.png", "Secret Number Game", "https://github.com/AdrianaIbarraG/practicaJS-juego_numero_secreto", "https://adrianaibarrag.github.io/practicaJS-juego_numero_secreto/"),
    new Information("assets/portfolio/shopingList.png", "Shoping List", "https://github.com/AdrianaIbarraG/CH25_ListaCompras_AdrianaIbarra", "https://adrianaibarrag.github.io/CH25_ListaCompras_AdrianaIbarra/"),
    new Information("assets/portfolio/barbershop.png", "Alura Barbershop", "https://github.com/AdrianaIbarraG/pr-ctica-Barber-a-Alura", "https://adrianaibarrag.github.io/pr-ctica-Barber-a-Alura/"),
    new Information("assets/portfolio/expanding-cards.png", "Expanding Cards", "https://github.com/AdrianaIbarraG/Expanding-cards", "https://adrianaibarrag.github.io/Expanding-cards/"),
    new Information("assets/portfolio/progress-steps.png","Progress Steps","https://github.com/AdrianaIbarraG/Progress-steps","https://adrianaibarrag.github.io/Progress-steps/")
);

info.forEach(e=> e.printInfo(divCards));

Information.printTotal();

/* ******************* Class Formation: Information to print *********************** */
let formations=[];
/* formation (img, title, school, date, description) */
formations.push(
    new Formation("assets/formation/CodingDojoLatam.png", "AWS Re/Start", "Coding Dojo Latam", "November 2023 - January 2024 | Guadalajara, Jal.", "Bootcamp to develop knowledge for Amazon Web Services, Cloud Computing, Linux and Python. Worked in laboratories to apply knowledge about AWS such as EC2, lambda, VPC, etc."),
    new Formation("assets/formation/generation.png", "Java Full Stack Developer", "Generation Mexico", "February 2023 - May 2024 | Guadalajara, Jal.", "Created web pages using HTML, CSS, JavaScript, Java, MySQL, Bootstrap and Springboot. Collaborative E-commerce Project tailored for a group of university girls in Mexico City with relational DB in MySQL"),
    new Formation("assets/formation/udg.png", "Business Administration", "University of Guadalajara", "January 2015 - May 2020 | Zapopan, Jal.", "Specialization in Organizational Consulting"),
    new Formation("assets/formation/aichi-logo.png", "Academic Exchange Program", "Aichi Prefectural University", "September 2018 - August 2019 | Nagakute, Japan", "Conducted a market research project on tourism motivators in Japan")
); 

formations.forEach(e=> e.printInfo(divFormation));