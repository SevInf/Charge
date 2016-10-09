angular.module('charge.iconBadge', [])

.service('iconBadge', function(
    $rootScope,
    cacheCounters,
    CONSTANTS
) {
    var ipcRenderer = require('electron').ipcRenderer;

    function enableIconBadge() {
        $rootScope.$watch(
            () => cacheCounters.unreadConversation(CONSTANTS.MAILBOX_IDENTIFIERS.inbox),
            (newValue) => {
                if (newValue == null) {
                    newValue = 0;
                }

                ipcRenderer.send('unread', newValue);
            }
        );
    }

    return {
        enableIconBadge
    }
})
