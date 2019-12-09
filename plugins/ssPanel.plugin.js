//META{"name":"ssPlugin"}*//

/**
 * Плагин добавляет хоткей (ctrl+h) скрытия панелей для mLite темы.
 * Так же добавляет класс в body о том что тема светлая
 */

var ssPlugin = function () {};

ssPlugin.prototype.start = function () {
	this.ssHandler = function(e){
        if (e.ctrlKey && e.keyCode === 72 /* e.key === 'h' */)
            $("body").toggleClass("compact-mode");
    };
    $(document).bind('keydown', this.ssHandler);
};

ssPlugin.prototype.stop = function () {
    $(document).unbind('keydown', this.ssHandler);
    $("body").removeClass("compact-mode");
};

ssPlugin.prototype.load       = function () {};
ssPlugin.prototype.unload     = function () {};
ssPlugin.prototype.onMessage  = function () {};
ssPlugin.prototype.onSwitch   = function () {};
ssPlugin.prototype.observer   = function () {};
ssPlugin.prototype.getSettingsPanel = function () { return ""; };
ssPlugin.prototype.getName          = function () { return "mLite theme js plugin"; };
ssPlugin.prototype.getDescription   = function () { return "Добавляет хоткей (ctrl+h) скрытия панелей для mLite темы"; };
ssPlugin.prototype.getVersion       = function () { return "0.1.5"; };
ssPlugin.prototype.getAuthor        = function () { return "LH"; };
