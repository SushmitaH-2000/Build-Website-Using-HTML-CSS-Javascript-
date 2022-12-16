const text=[
'Mother Teresa, Kalpana Chawla, Sarojini Naidu, and many other women have been the epitome of inspiration to Indian society. Today women have uplifted society and their contribution to our nation has been inseparable from the history of our success. There is one such woman whose contribution to the people of our country has been remarkable. She is Sudha Murthy',

'Sudha Murty (née Kulkarni; born 19 August 1951) is an Indian educator, author and philanthropist who is chairperson of the Infosys Foundation. She is married to the co-founder of Infosys, N. R. Narayana Murthy. Murty was awarded the Padma Shri, the fourth highest civilian award in India, for social work by the Government of India in 2006',

'Sudha Murty began her professional career in computer science and engineering. She is the chairperson of the Infosys Foundation and a member of the public health care initiatives of the Gates Foundation.[2][3] She has founded several orphanages, participated in rural development efforts, supported the movement to provide all Karnataka government schools with computer and library facilities, and established Murty Classical Library of India at Harvard University',

'Murty is best known for her philanthropy and her contribution to literature in Kannada and English. Dollar Bahu, a novel originally authored by her in Kannada and later translated into English as Dollar Bahu, was adapted as a televised dramatic series by Zee TV in 2001.[9] Runa, a story by Sudha Murthy was adapted as a Marathi film, Pitruroon by director Nitish Bhardwaj. Sudha Murthy has also acted in the film[10] as well as a Kannada film Prarthana',

'Sudha Murty was born into a Kannada Deshastha Madhva Brahmin family[13][14] on 19 August 1951 in Shiggaon, Haveri in Karnataka, India, the daughter of R. H. Kulkarni, a surgeon, and his wife Vimala Kulkarni, a school teacher. She was raised by her parents and maternal grandparents',

'Murty completed a B.Eng. in Electrical and Electronics Engineering from the B.V.B. College of Engineering & Technology (now known as KLE Technological University),and then a M.Eng. in Computer Science from the Indian Institute of Science',

'Sudha Murty became the first female engineer hired at India as TATA and Locomotive Company(TELCO).She joined the company as a Development Engineer in Pune and then worked in Mumbai & Jamshedpur as well.She had written a postcard to the companies Chairman complaining of the men only gender bias at TELCO. As a result, she was granted a special interview and hired immediately',

'In 1996, she started Infosys Foundation and to date has been the Trustee of Infosys Foundation and a Visiting Professor at the PG Center of Bangalore University. She also taught at Christ University',

'Sudha Murty has written and published many books which include novels, non-fiction, travelogues, technical books, and memoirs. Her books have been translated into all major Indian languages. She is also a columnist for English and Kannada newspapers.',

'AWARDS ...2004: Raja-Lakshmi Award by Sri Raja-Lakshmi Foundation in Chennai.2006: Indias fourth highest civilian award Padma Shri.2006: She also received the R.K. Narayanas Award for Literature',

'BOOKS....Dollar Sose.Runa.Kaveri inda Mekaangige.Hakkiya Teradalli.Athirikthe.The Mother I Never Knew.The Man from the Egg.Here, There, Everywhere.The Magic of the Lost Temple',

'Sudha Murthy is known for her philanthropic work. She has helped society in enormous ways. From public hygiene, poverty alleviation to spreading awareness about rural education and women empowerment; she has worked for all. She aims and dreams about a clean India hence she works on building up toilets for the public. She has also been very passionate about aiding the people with all necessary resources who suffer due to floods.',

];
//console.log(text);
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}



//selector


const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data")

const generate =() => {
       if(isNaN(item.value) || item.value < 0 || item.value > 12){
         const randomIndex = Math.floor(Math.random() * text.length);
          dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`

    }
    else
    {

        const localText = shuffle(text);
        const data = localText.slice(0, item.value)
        const parars = data.map(
            (d) => {
                return `<p> ${d} </p>`
            }
        )
        console.log(parars)
        console.log(parars.join(""))
        dataContainer.innerHTML = parars.join("");
        // array to string
    }
}