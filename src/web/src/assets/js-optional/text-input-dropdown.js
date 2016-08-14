$(function () {

    console.log("amk");

    var twitchLanguages = [
        {name: 'Dansk', code: 'da'},
        {name: 'Deutsch', code: 'de'},
        {name: 'Englisch', code: 'en'},
        {name: 'Español', code: 'es'},
        {name: 'Español - México', code: 'es-mx'},
        {name: 'Français', code: 'fr'},
        {name: 'Italiano', code: 'it'},
        {name: 'Magyar', code: 'hu'},
        {name: 'Nederlands', code: 'nl'},
        {name: 'Norsk', code: 'no'},
        {name: 'Polski', code: 'pl'},
        {name: 'Português', code: 'pt'},
        {name: 'Português Brasileiro', code: 'pt-br'},
        {name: 'Slovenčina', code: 'sk'},
        {name: 'Suomi', code: 'fi'},
        {name: 'Svenska', code: 'sv'},
        {name: 'Tiếng Việt', code: 'vi'},
        {name: 'Türkçe', code: 'tr'},
        {name: 'Čeština', code: 'cs'},
        {name: 'Ελληνικά', code: 'el'},
        {name: 'Български', code: 'bg'},
        {name: 'Русский', code: 'ru'},
        {name: 'العربية', code: 'ar'},
        {name: 'ภาษาไทย', code: 'th'},
        {name: '中文 简体', code: 'zh-cn'},
        {name: '中文 繁體', code: 'zh-tw'},
        {name: '日本語', code: 'ja'},
        {name: '한국어', code: 'ko'}
    ];

    $(".twitch-language-input").autocomplete({
        source: function (request, response) {
            renamedTwitchLanguages = $.map(twitchLanguages, function (twitchLanguage) {
                return {value: twitchLanguage.code, label: twitchLanguage.name}
            });
            filteredTwitchLanguages = $.grep(renamedTwitchLanguages, function (twitchLanguage, index) {
                return twitchLanguage.value.includes(request.term) || twitchLanguage.label.includes(request.term)
            });
            response(filteredTwitchLanguages);
        }
    });
});