var lang = navigator.language || navigator.userLanguage; // saw this on the stackoverflow
switch (lang) {
    case 'ru':
        alert('Привет!');
        break;
    case 'en':
        alert('Hello!');
        break;
        case 'es':
        alert('Hola!');
        break;
    case 'de':
        alert('Hallo!');
        break;
    case 'fr':
        alert('Bonjour!');
        break;
    case 'it':
        alert('Ciao!');
        break;
    case 'pl':
        alert('Cześć!');
        break;
    
    default:
        alert('who you are ?)');
}