$(function () {

    console.log("amk");


    var twitchLanguages = [
        {label: 'Dansk', value: 'da'},
        {label: 'Deutsch', value: 'de'},
        {label: 'Englisch', value: 'en'},
        {label: 'Español', value: 'es'},
        {label: 'Español - México', value: 'es-mx'},
        {label: 'Français', value: 'fr'},
        {label: 'Italiano', value: 'it'},
        {label: 'Magyar', value: 'hu'},
        {label: 'Nederlands', value: 'nl'},
        {label: 'Norsk', value: 'no'},
        {label: 'Polski', value: 'pl'},
        {label: 'Português', value: 'pt'},
        {label: 'Português Brasileiro', value: 'pt-br'},
        {label: 'Slovenčina', value: 'sk'},
        {label: 'Suomi', value: 'fi'},
        {label: 'Svenska', value: 'sv'},
        {label: 'Tiếng Việt', value: 'vi'},
        {label: 'Türkçe', value: 'tr'},
        {label: 'Čeština', value: 'cs'},
        {label: 'Ελληνικά', value: 'el'},
        {label: 'Български', value: 'bg'},
        {label: 'Русский', value: 'ru'},
        {label: 'العربية', value: 'ar'},
        {label: 'ภาษาไทย', value: 'th'},
        {label: '中文 简体', value: 'zh-cn'},
        {label: '中文 繁體', value: 'zh-tw'},
        {label: '日本語', value: 'ja'},
        {label: '한국어', value: 'ko'}
    ];

    $(".twitch-language-input").autocomplete({
        source: twitchLanguages
    });

});