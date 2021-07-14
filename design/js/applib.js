window.Lube = function ($, ns) {
    'use strict';

    var cfg = {
        cache: {},
        classes: {
            scrolling: 'scrolling'
        },
        events: {
            scroll: 'scroll',
            click: 'click'
        }
    };

    ns.Dom = {
        init: function () {
            var settings = cfg,
                classes = settings.classes,
                events = settings.events,
                cache = settings.cache;

            this.win = $(window);
            this.body = $(document.body);

            this.bindEvents(classes, events);
            this.windowsPhoneViewportFix();
            this.bindScrollTopEvent();
            this.bindDataHref();
            this.initLightbox();
            this.initCarousel();
        },

        bindEvents: function (classes, events) {
            var self = this,
                settings = cfg,
                cache = settings.cache;

            // this.win.on(events.scroll, function() {
            //     self.body.addClass(classes.scrolling);

            //     ns.fn.delayedEvent(function() {
            //         self.body.removeClass(classes.scrolling);
            //     }, 100, events.scroll);
            // });
        },

        windowsPhoneViewportFix: function () {
            // Copyright 2014-2015 Twitter, Inc.
            // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement('style');
                msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
                document.querySelector('head').appendChild(msViewportStyle);
            }
        },
        bindScrollTopEvent: function () {
            var self = this;
            $('a[href="#top"]').click(function () {
                self.body.animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        },
        bindDataHref: function () {
            $('[data-href]').on('click', function (e) {
                if (!$(e.target).is('a')) {
                    window.location = $(this).data('href');
                    return false;
                }
            });
            $('[data-href]').on('mousedown', function (e) {
                if (!$(e.target).is('a') && e.which == 2) {
                    window.open($(this).data('href'), '_blank');
                    return false;
                }
            });
        },
        initLightbox: function () {
            $('.img-link').magnificPopup({ type: 'image' });

            $('.gallery-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
            $('.content-gallery a').simpleLightbox();
        },
        initCarousel: function () {
            $('.lube-carousel').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                variableWidth: true
            });
        }
    };

    return ns;
}(window.jQuery, window.Lube || {});

/**
 * @author       [Stef Coenen & Tim Vermaelen]
 * @date         [2016]
 * @namespace    [Lube.fn]
 * @type         [Functions]
 * @requires     [jQuery, Lube]
 * @revision     [0.1]
 */

// @param ($): window.jQuery
// @param (ns): window.Lube
window.Lube = function ($, ns) {
    // 1. ECMA-262/5
    'use strict';

    // 2. CONFIGURATION

    var cfg = {
        patterns: {
            mobile: new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i),
            mobile2: new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/),
            tablet: new RegExp(/android|ipad|playbook|silk/i)
        },
        devices: {
            mobile: 'mobile',
            tablet: 'tablet',
            desktop: 'desktop'
        },
        delimiter: {
            key: '&',
            val: '='
        }
    };

    // 3. FUNCTIONS OBJECT
    ns.fn = {
        /**
         * @description Equally set height on items
         * @param {Object} elements : jquery list
         */
        equalHeight: function (elements) {
            var el = $(elements),
                len = el.length || 0,
                heighest = 0;

            if (len > 1) {
                while (len--) {
                    var h = el.eq(len).outerHeight(true);

                    if (h > heighest) {
                        heighest = h;
                    }
                }

                el.outerHeight(heighest);
            }
        },

        /**
         * @description Convert a query alike string to an object literal
         * @param {String} qs : a query string of key value pairs (without ?)
         * @param {String} keyDelimiter : character between values and keys
         * @param {String} valDelimiter : character between keys and values
         * @return {Object} obj : object literal representing the query string
         * @example: key1=val1&key2=val2&key3=val3
         */
        convertQsToLiteral: function (qs, keyDelimiter, valDelimiter) {
            var arrParams,
                obj = {};

            if (qs && qs.length) {
                keyDelimiter = keyDelimiter || cfg.delimiter.key;
                valDelimiter = valDelimiter || cfg.delimiter.val;
                arrParams = qs.split(keyDelimiter);

                $.each(arrParams, function (i, pair) {
                    var arrPair = pair.split(valDelimiter),
                        key = arrPair[0],
                        val = arrPair[1];

                    obj[key] = val;
                });
            }

            return obj;
        },

        getStringFromTime: function (time) {
            let hours = time.hours + '';
            hours = hours.length === 1 ? '0' + hours : hours;

            let minutes = time.minutes + '';
            minutes = minutes.length === 1 ? '0' + minutes : minutes;

            return hours + ':' + minutes;
        },
        getStringFromTimeSpan: function (timeS, timeE) {
            return this.getStringFromTime(timeS) + ' - ' + this.getStringFromTime(timeE);
        },
        getTimeSpanFromString: function (timeString) {
            let stringSplit = timeString.split(':');
            return {
                hours: parseInt(stringSplit[0]),
                minutes: parseInt(stringSplit[1])
            };
        },
        compareTimeObjects: function (a, b) {
            return a.hours === b.hours && a.minutes === b.minutes;
        },
        getTimeObjectFromDate: function (date) {
            return {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                date: date
            };
        },
        convertDateToYearMonthDay: function (date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        },
        convertTimeObjectToDate: function (timeObject, dateObject) {
            let newDate = new Date(dateObject.getTime());

            newDate.setHours(timeObject.hours);
            newDate.setMinutes(timeObject.minutes);
            newDate.setSeconds(0);
            newDate.setMilliseconds(0);

            return newDate;
        },
        compareDateForSameDay: function (a, b) {
            if (a.getFullYear() === b.getFullYear()) {
                if (a.getMonth() === b.getMonth()) {
                    if (a.getDate() === b.getDate()) {
                        return true;
                    }
                }
            }
            return false;
        },
        deleteNullProperties: function (object) {
            for (var property in object) {
                if (object.hasOwnProperty(property)) {
                    if (object[property] === null) {
                        delete object[property];
                    }
                }
            }
            return object;
        },
        convertParametersToObject: function (query) {
            var vars = query.split('&');
            var query_string = {};
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                // If first entry with this name
                if (typeof query_string[pair[0]] === 'undefined') {
                    query_string[pair[0]] = decodeURIComponent(pair[1]);
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === 'string') {
                    var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(decodeURIComponent(pair[1]));
                }
            }
            return query_string;
        },
        getQueryStringObject: function () {
            let query = window.location.search.substring(1);
            return this.convertParametersToObject(query);
        },
        gotoDayOfWeek: function (date, dayOfWeek) {
            date = new Date(date.getTime());
            let dateDay = date.getDay();

            if (dayOfWeek !== 0 && dateDay === 0) {
                date.setDate(date.getDate() - (7 - dayOfWeek));
            } else if (dateDay !== dayOfWeek) {
                date.setDate(date.getDate() - dateDay + dayOfWeek);
            }

            return date;
        }
    };

    // 4. NAMESPACE
    return ns;
}(window.jQuery, window.Lube || {});

/**
 * @author       [Stef Coenen]
 * @date         [2016]
 * @namespace    [Lube.validator]
 * @type         [Functions]
 * @requires     [jQuery, Lube]
 * @revision     [0.1]
 */

// @param ($): window.jQuery
// @param (ns): window.Lube
window.Lube = function ($, ns) {
    // 1. ECMA-262/5
    'use strict';

    // 2. CONFIGURATION

    var cfg = {
        cache: {
            formGroup: '.form-group'
        },
        classes: {
            hasError: 'is-invalid',
            hasSuccess: 'is-valid'
        },
        data: {
            required: 'required',
            pattern: 'pattern',
            match: 'match',
            action: 'action',
            name: 'name'
        }
    };

    // 3. FUNCTIONS OBJECT
    ns.validator = {
        validateInput: function (input) {
            let settings = cfg,
                data = settings.data,
                cache = settings.cache,
                classes = settings.classes,
                inputVal = input.val(),
                formGroup = input.closest(cache.formGroup);

            formGroup.removeClass(classes.hasSuccess);
            formGroup.removeClass(classes.hasError);

            // Required check
            let required = input.attr(data.required);
            if (required && (!inputVal || inputVal.length === 0)) {
                formGroup.addClass(classes.hasError);
                return false;
            }

            // Pattern check
            let pattern = input.attr(data.pattern);
            if (pattern) {
                let regex = new RegExp(pattern);
                if (!regex.test(inputVal)) {
                    formGroup.addClass(classes.hasError);
                    return false;
                }
            }

            // Match check
            let match = input.data(data.match);
            if (match) {
                let matchElement = $(match);
                if (inputVal !== matchElement.val()) {
                    formGroup.addClass(classes.hasError);
                    return false;
                }
            }

            formGroup.addClass(classes.hasSuccess);
            return true;
        }
    };

    // 4. NAMESPACE
    return ns;
}(window.jQuery, window.Lube || {});

/**
 * [window.Lube]
 *
 * @author       [Stef Coenen]
 * @date         [2017]
 * @namespace    [Lube]
 * @requires     [jQuery]
 * @revision     [0.1]
 */

window.Lube = function ($, ns) {
    // 1. ECMA-262/5
    'use strict';

    // 2. LOAD COMPONENTS

    ns.components = function () {
        ns.Dom.init();
    };

    // 3. LOAD DATACOMPONENTS
    ns.dataComponentInitializer = function () {
        var dataComponents = $('[data-component]');
        for (var i = 0; i < dataComponents.length; i++) {
            var dataComponent = dataComponents.eq(i);
            var dataAttr = dataComponent.data('component');
            dataAttr = dataAttr.split('.');

            if (dataAttr.length >= 2) {
                var componentFunction = ns[dataAttr[1]];
                if (componentFunction) {
                    new componentFunction(dataComponent);
                }
            }
        }
    };

    // 4. ONCE THE DOM IS READY
    $(function () {
        ns.components();
        ns.dataComponentInitializer();
    });

    // 5. TRIGGER LOAD EVENT ON NS
    // This is required as of jQuery 3.0 as jQuery no longer
    //   supports load event binding form inside a ready event handler
    $(window).on('load', function () {
        $.ready.then(function () {
            $(ns).trigger('load');
        });
    });

    // // 6. REGISTER SW
    // if ('serviceWorker' in navigator) {
    //     // Register a service worker hosted at the root of the
    //     // site using the default scope.
    //     navigator.serviceWorker
    //         .register('/app/sw.js')
    //         .then(function(registration) {
    //             console.info('Service worker registration succeeded:', registration);
    //             registration.update();
    //         })
    //         .catch(function(error) {
    //             console.info('Service worker registration failed:', error);
    //         });
    // } else {
    //     console.info('Service workers are not supported.');
    // }

    // 8. GLOBALIZE NAMESPACE
    return ns;
}(window.jQuery, window.Lube || {});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx1YmUuZG9tLmpzIiwibHViZS5mbi5qcyIsImx1YmUudmFsaWRhdG9yLmpzIiwibHViZS5zdHJhcG9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkx1YmUiLCIkIiwibnMiLCJjZmciLCJjYWNoZSIsImNsYXNzZXMiLCJzY3JvbGxpbmciLCJldmVudHMiLCJzY3JvbGwiLCJjbGljayIsIkRvbSIsImluaXQiLCJzZXR0aW5ncyIsIndpbiIsImJvZHkiLCJkb2N1bWVudCIsImJpbmRFdmVudHMiLCJ3aW5kb3dzUGhvbmVWaWV3cG9ydEZpeCIsImJpbmRTY3JvbGxUb3BFdmVudCIsImJpbmREYXRhSHJlZiIsImluaXRMaWdodGJveCIsImluaXRDYXJvdXNlbCIsInNlbGYiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsIm1zVmlld3BvcnRTdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicXVlcnlTZWxlY3RvciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvbiIsImUiLCJ0YXJnZXQiLCJpcyIsImxvY2F0aW9uIiwiZGF0YSIsIndoaWNoIiwib3BlbiIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwidmFyaWFibGVXaWR0aCIsImpRdWVyeSIsInBhdHRlcm5zIiwibW9iaWxlIiwiUmVnRXhwIiwibW9iaWxlMiIsInRhYmxldCIsImRldmljZXMiLCJkZXNrdG9wIiwiZGVsaW1pdGVyIiwia2V5IiwidmFsIiwiZm4iLCJlcXVhbEhlaWdodCIsImVsZW1lbnRzIiwiZWwiLCJsZW4iLCJsZW5ndGgiLCJoZWlnaGVzdCIsImgiLCJlcSIsIm91dGVySGVpZ2h0IiwiY29udmVydFFzVG9MaXRlcmFsIiwicXMiLCJrZXlEZWxpbWl0ZXIiLCJ2YWxEZWxpbWl0ZXIiLCJhcnJQYXJhbXMiLCJvYmoiLCJzcGxpdCIsImVhY2giLCJpIiwicGFpciIsImFyclBhaXIiLCJnZXRTdHJpbmdGcm9tVGltZSIsInRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJnZXRTdHJpbmdGcm9tVGltZVNwYW4iLCJ0aW1lUyIsInRpbWVFIiwiZ2V0VGltZVNwYW5Gcm9tU3RyaW5nIiwidGltZVN0cmluZyIsInN0cmluZ1NwbGl0IiwicGFyc2VJbnQiLCJjb21wYXJlVGltZU9iamVjdHMiLCJhIiwiYiIsImdldFRpbWVPYmplY3RGcm9tRGF0ZSIsImRhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJjb252ZXJ0RGF0ZVRvWWVhck1vbnRoRGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJjb252ZXJ0VGltZU9iamVjdFRvRGF0ZSIsInRpbWVPYmplY3QiLCJkYXRlT2JqZWN0IiwibmV3RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInNldE1pbGxpc2Vjb25kcyIsImNvbXBhcmVEYXRlRm9yU2FtZURheSIsImRlbGV0ZU51bGxQcm9wZXJ0aWVzIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnZlcnRQYXJhbWV0ZXJzVG9PYmplY3QiLCJxdWVyeSIsInZhcnMiLCJxdWVyeV9zdHJpbmciLCJkZWNvZGVVUklDb21wb25lbnQiLCJhcnIiLCJwdXNoIiwiZ2V0UXVlcnlTdHJpbmdPYmplY3QiLCJzZWFyY2giLCJzdWJzdHJpbmciLCJnb3RvRGF5T2ZXZWVrIiwiZGF5T2ZXZWVrIiwiZGF0ZURheSIsImdldERheSIsInNldERhdGUiLCJmb3JtR3JvdXAiLCJoYXNFcnJvciIsImhhc1N1Y2Nlc3MiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJhY3Rpb24iLCJuYW1lIiwidmFsaWRhdG9yIiwidmFsaWRhdGVJbnB1dCIsImlucHV0IiwiaW5wdXRWYWwiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZWdleCIsInRlc3QiLCJtYXRjaEVsZW1lbnQiLCJjb21wb25lbnRzIiwiZGF0YUNvbXBvbmVudEluaXRpYWxpemVyIiwiZGF0YUNvbXBvbmVudHMiLCJkYXRhQ29tcG9uZW50IiwiZGF0YUF0dHIiLCJjb21wb25lbnRGdW5jdGlvbiIsInJlYWR5IiwidGhlbiIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFBQyxJQUFBLEdBQUEsVUFBQUMsQ0FBQSxFQUFBQyxFQUFBLEVBQUE7QUFDQTs7QUFFQSxRQUFBQyxNQUFBO0FBQ0FDLGVBQUEsRUFEQTtBQUVBQyxpQkFBQTtBQUNBQyx1QkFBQTtBQURBLFNBRkE7QUFLQUMsZ0JBQUE7QUFDQUMsb0JBQUEsUUFEQTtBQUVBQyxtQkFBQTtBQUZBO0FBTEEsS0FBQTs7QUFXQVAsT0FBQVEsR0FBQSxHQUFBO0FBQ0FDLGNBQUEsWUFBQTtBQUNBLGdCQUFBQyxXQUFBVCxHQUFBO0FBQUEsZ0JBQ0FFLFVBQUFPLFNBQUFQLE9BREE7QUFBQSxnQkFFQUUsU0FBQUssU0FBQUwsTUFGQTtBQUFBLGdCQUdBSCxRQUFBUSxTQUFBUixLQUhBOztBQUtBLGlCQUFBUyxHQUFBLEdBQUFaLEVBQUFGLE1BQUEsQ0FBQTtBQUNBLGlCQUFBZSxJQUFBLEdBQUFiLEVBQUFjLFNBQUFELElBQUEsQ0FBQTs7QUFFQSxpQkFBQUUsVUFBQSxDQUFBWCxPQUFBLEVBQUFFLE1BQUE7QUFDQSxpQkFBQVUsdUJBQUE7QUFDQSxpQkFBQUMsa0JBQUE7QUFDQSxpQkFBQUMsWUFBQTtBQUNBLGlCQUFBQyxZQUFBO0FBQ0EsaUJBQUFDLFlBQUE7QUFDQSxTQWhCQTs7QUFrQkFMLG9CQUFBLFVBQUFYLE9BQUEsRUFBQUUsTUFBQSxFQUFBO0FBQ0EsZ0JBQUFlLE9BQUEsSUFBQTtBQUFBLGdCQUNBVixXQUFBVCxHQURBO0FBQUEsZ0JBRUFDLFFBQUFRLFNBQUFSLEtBRkE7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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b250ZW50IjpbIndpbmRvdy5MdWJlID0gKGZ1bmN0aW9uKCQsIG5zKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGNmZyA9IHtcbiAgICAgICAgY2FjaGU6IHt9LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICBzY3JvbGxpbmc6ICdzY3JvbGxpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgc2Nyb2xsOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIGNsaWNrOiAnY2xpY2snXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbnMuRG9tID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGNmZyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0gc2V0dGluZ3MuY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBldmVudHMgPSBzZXR0aW5ncy5ldmVudHMsXG4gICAgICAgICAgICAgICAgY2FjaGUgPSBzZXR0aW5ncy5jYWNoZTtcblxuICAgICAgICAgICAgdGhpcy53aW4gPSAkKHdpbmRvdyk7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoY2xhc3NlcywgZXZlbnRzKTtcbiAgICAgICAgICAgIHRoaXMud2luZG93c1Bob25lVmlld3BvcnRGaXgoKTtcbiAgICAgICAgICAgIHRoaXMuYmluZFNjcm9sbFRvcEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmJpbmREYXRhSHJlZigpO1xuICAgICAgICAgICAgdGhpcy5pbml0TGlnaHRib3goKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmluZEV2ZW50czogZnVuY3Rpb24oY2xhc3NlcywgZXZlbnRzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MgPSBjZmcsXG4gICAgICAgICAgICAgICAgY2FjaGUgPSBzZXR0aW5ncy5jYWNoZTtcblxuICAgICAgICAgICAgLy8gdGhpcy53aW4ub24oZXZlbnRzLnNjcm9sbCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgc2VsZi5ib2R5LmFkZENsYXNzKGNsYXNzZXMuc2Nyb2xsaW5nKTtcblxuICAgICAgICAgICAgLy8gICAgIG5zLmZuLmRlbGF5ZWRFdmVudChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5ib2R5LnJlbW92ZUNsYXNzKGNsYXNzZXMuc2Nyb2xsaW5nKTtcbiAgICAgICAgICAgIC8vICAgICB9LCAxMDAsIGV2ZW50cy5zY3JvbGwpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2luZG93c1Bob25lVmlld3BvcnRGaXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gQ29weXJpZ2h0IDIwMTQtMjAxNSBUd2l0dGVyLCBJbmMuXG4gICAgICAgICAgICAvLyBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlXFwvMTBcXC4wLykpIHtcbiAgICAgICAgICAgICAgICB2YXIgbXNWaWV3cG9ydFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBtc1ZpZXdwb3J0U3R5bGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdALW1zLXZpZXdwb3J0e3dpZHRoOmF1dG8haW1wb3J0YW50fScpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobXNWaWV3cG9ydFN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmluZFNjcm9sbFRvcEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICQoJ2FbaHJlZj1cIiN0b3BcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmJvZHkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAnc2xvdycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiaW5kRGF0YUhyZWY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtaHJlZl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5pcygnYScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgnaHJlZicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCdbZGF0YS1ocmVmXScpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5pcygnYScpICYmIGUud2hpY2ggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKHRoaXMpLmRhdGEoJ2hyZWYnKSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRMaWdodGJveDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuaW1nLWxpbmsnKS5tYWduaWZpY1BvcHVwKHsgdHlwZTogJ2ltYWdlJyB9KTtcblxuICAgICAgICAgICAgJCgnLmdhbGxlcnktbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRDYXJvdXNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubHViZS1jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbnM7XG59KSh3aW5kb3cualF1ZXJ5LCB3aW5kb3cuTHViZSB8fCB7fSk7XG4iLCIvKipcbiAqIEBhdXRob3IgICAgICAgW1N0ZWYgQ29lbmVuICYgVGltIFZlcm1hZWxlbl1cbiAqIEBkYXRlICAgICAgICAgWzIwMTZdXG4gKiBAbmFtZXNwYWNlICAgIFtMdWJlLmZuXVxuICogQHR5cGUgICAgICAgICBbRnVuY3Rpb25zXVxuICogQHJlcXVpcmVzICAgICBbalF1ZXJ5LCBMdWJlXVxuICogQHJldmlzaW9uICAgICBbMC4xXVxuICovXG5cbi8vIEBwYXJhbSAoJCk6IHdpbmRvdy5qUXVlcnlcbi8vIEBwYXJhbSAobnMpOiB3aW5kb3cuTHViZVxud2luZG93Lkx1YmUgPSAoZnVuY3Rpb24oJCwgbnMpIHtcbiAgICAvLyAxLiBFQ01BLTI2Mi81XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gMi4gQ09ORklHVVJBVElPTlxuICAgIHZhciBjZmcgPSB7XG4gICAgICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICAgICBtb2JpbGU6IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2lcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtb2JpbGUyOiBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YWJsZXQ6IG5ldyBSZWdFeHAoL2FuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kpXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZXM6IHtcbiAgICAgICAgICAgIG1vYmlsZTogJ21vYmlsZScsXG4gICAgICAgICAgICB0YWJsZXQ6ICd0YWJsZXQnLFxuICAgICAgICAgICAgZGVza3RvcDogJ2Rlc2t0b3AnXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGltaXRlcjoge1xuICAgICAgICAgICAga2V5OiAnJicsXG4gICAgICAgICAgICB2YWw6ICc9J1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIDMuIEZVTkNUSU9OUyBPQkpFQ1RcbiAgICBucy5mbiA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBFcXVhbGx5IHNldCBoZWlnaHQgb24gaXRlbXNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRzIDoganF1ZXJ5IGxpc3RcbiAgICAgICAgICovXG4gICAgICAgIGVxdWFsSGVpZ2h0OiBmdW5jdGlvbihlbGVtZW50cykge1xuICAgICAgICAgICAgdmFyIGVsID0gJChlbGVtZW50cyksXG4gICAgICAgICAgICAgICAgbGVuID0gZWwubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2hlc3QgPSAwO1xuXG4gICAgICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGVsLmVxKGxlbikub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGggPiBoZWlnaGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2hlc3QgPSBoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwub3V0ZXJIZWlnaHQoaGVpZ2hlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gQ29udmVydCBhIHF1ZXJ5IGFsaWtlIHN0cmluZyB0byBhbiBvYmplY3QgbGl0ZXJhbFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gcXMgOiBhIHF1ZXJ5IHN0cmluZyBvZiBrZXkgdmFsdWUgcGFpcnMgKHdpdGhvdXQgPylcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleURlbGltaXRlciA6IGNoYXJhY3RlciBiZXR3ZWVuIHZhbHVlcyBhbmQga2V5c1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsRGVsaW1pdGVyIDogY2hhcmFjdGVyIGJldHdlZW4ga2V5cyBhbmQgdmFsdWVzXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gb2JqIDogb2JqZWN0IGxpdGVyYWwgcmVwcmVzZW50aW5nIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICogQGV4YW1wbGU6IGtleTE9dmFsMSZrZXkyPXZhbDIma2V5Mz12YWwzXG4gICAgICAgICAqL1xuICAgICAgICBjb252ZXJ0UXNUb0xpdGVyYWw6IGZ1bmN0aW9uKHFzLCBrZXlEZWxpbWl0ZXIsIHZhbERlbGltaXRlcikge1xuICAgICAgICAgICAgdmFyIGFyclBhcmFtcyxcbiAgICAgICAgICAgICAgICBvYmogPSB7fTtcblxuICAgICAgICAgICAgaWYgKHFzICYmIHFzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtleURlbGltaXRlciA9IGtleURlbGltaXRlciB8fCBjZmcuZGVsaW1pdGVyLmtleTtcbiAgICAgICAgICAgICAgICB2YWxEZWxpbWl0ZXIgPSB2YWxEZWxpbWl0ZXIgfHwgY2ZnLmRlbGltaXRlci52YWw7XG4gICAgICAgICAgICAgICAgYXJyUGFyYW1zID0gcXMuc3BsaXQoa2V5RGVsaW1pdGVyKTtcblxuICAgICAgICAgICAgICAgICQuZWFjaChhcnJQYXJhbXMsIGZ1bmN0aW9uKGksIHBhaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyclBhaXIgPSBwYWlyLnNwbGl0KHZhbERlbGltaXRlciksXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBhcnJQYWlyWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gYXJyUGFpclsxXTtcblxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTdHJpbmdGcm9tVGltZTogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgbGV0IGhvdXJzID0gdGltZS5ob3VycyArICcnO1xuICAgICAgICAgICAgaG91cnMgPSBob3Vycy5sZW5ndGggPT09IDEgPyAnMCcgKyBob3VycyA6IGhvdXJzO1xuXG4gICAgICAgICAgICBsZXQgbWludXRlcyA9IHRpbWUubWludXRlcyArICcnO1xuICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMubGVuZ3RoID09PSAxID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG5cbiAgICAgICAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFN0cmluZ0Zyb21UaW1lU3BhbjogZnVuY3Rpb24odGltZVMsIHRpbWVFKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdGcm9tVGltZSh0aW1lUykgKyAnIC0gJyArIHRoaXMuZ2V0U3RyaW5nRnJvbVRpbWUodGltZUUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaW1lU3BhbkZyb21TdHJpbmc6IGZ1bmN0aW9uKHRpbWVTdHJpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdTcGxpdCA9IHRpbWVTdHJpbmcuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlSW50KHN0cmluZ1NwbGl0WzBdKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZUludChzdHJpbmdTcGxpdFsxXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhcmVUaW1lT2JqZWN0czogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaG91cnMgPT09IGIuaG91cnMgJiYgYS5taW51dGVzID09PSBiLm1pbnV0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRpbWVPYmplY3RGcm9tRGF0ZTogZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBob3VyczogZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZlcnREYXRlVG9ZZWFyTW9udGhEYXk6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLScgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udmVydFRpbWVPYmplY3RUb0RhdGU6IGZ1bmN0aW9uKHRpbWVPYmplY3QsIGRhdGVPYmplY3QpIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZU9iamVjdC5nZXRUaW1lKCkpO1xuXG4gICAgICAgICAgICBuZXdEYXRlLnNldEhvdXJzKHRpbWVPYmplY3QuaG91cnMpO1xuICAgICAgICAgICAgbmV3RGF0ZS5zZXRNaW51dGVzKHRpbWVPYmplY3QubWludXRlcyk7XG4gICAgICAgICAgICBuZXdEYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICAgICAgICBuZXdEYXRlLnNldE1pbGxpc2Vjb25kcygwKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhcmVEYXRlRm9yU2FtZURheTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgaWYgKGEuZ2V0RnVsbFllYXIoKSA9PT0gYi5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVOdWxsUHJvcGVydGllczogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0W3Byb3BlcnR5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LFxuICAgICAgICBjb252ZXJ0UGFyYW1ldGVyc1RvT2JqZWN0OiBmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5X3N0cmluZyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgZmlyc3QgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZWNvbmQgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBxdWVyeV9zdHJpbmdbcGFpclswXV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbcXVlcnlfc3RyaW5nW3BhaXJbMF1dLCBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSldO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeV9zdHJpbmdbcGFpclswXV0gPSBhcnI7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXJkIG9yIGxhdGVyIGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnlfc3RyaW5nO1xuICAgICAgICB9LFxuICAgICAgICBnZXRRdWVyeVN0cmluZ09iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRQYXJhbWV0ZXJzVG9PYmplY3QocXVlcnkpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvRGF5T2ZXZWVrOiBmdW5jdGlvbihkYXRlLCBkYXlPZldlZWspIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBsZXQgZGF0ZURheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICAgICAgICAgIGlmIChkYXlPZldlZWsgIT09IDAgJiYgZGF0ZURheSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtICg3IC0gZGF5T2ZXZWVrKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVEYXkgIT09IGRheU9mV2Vlaykge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGVEYXkgKyBkYXlPZldlZWspO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyA0LiBOQU1FU1BBQ0VcbiAgICByZXR1cm4gbnM7XG59KSh3aW5kb3cualF1ZXJ5LCB3aW5kb3cuTHViZSB8fCB7fSk7XG4iLCIvKipcbiAqIEBhdXRob3IgICAgICAgW1N0ZWYgQ29lbmVuXVxuICogQGRhdGUgICAgICAgICBbMjAxNl1cbiAqIEBuYW1lc3BhY2UgICAgW0x1YmUudmFsaWRhdG9yXVxuICogQHR5cGUgICAgICAgICBbRnVuY3Rpb25zXVxuICogQHJlcXVpcmVzICAgICBbalF1ZXJ5LCBMdWJlXVxuICogQHJldmlzaW9uICAgICBbMC4xXVxuICovXG5cbi8vIEBwYXJhbSAoJCk6IHdpbmRvdy5qUXVlcnlcbi8vIEBwYXJhbSAobnMpOiB3aW5kb3cuTHViZVxud2luZG93Lkx1YmUgPSAoZnVuY3Rpb24oJCwgbnMpIHtcbiAgICAvLyAxLiBFQ01BLTI2Mi81XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gMi4gQ09ORklHVVJBVElPTlxuICAgIHZhciBjZmcgPSB7XG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgICBmb3JtR3JvdXA6ICcuZm9ybS1ncm91cCdcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgaGFzRXJyb3I6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICAgIGhhc1N1Y2Nlc3M6ICdpcy12YWxpZCdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBwYXR0ZXJuOiAncGF0dGVybicsXG4gICAgICAgICAgICBtYXRjaDogJ21hdGNoJyxcbiAgICAgICAgICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyAzLiBGVU5DVElPTlMgT0JKRUNUXG4gICAgbnMudmFsaWRhdG9yID0ge1xuICAgICAgICB2YWxpZGF0ZUlucHV0OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgbGV0IHNldHRpbmdzID0gY2ZnLFxuICAgICAgICAgICAgICAgIGRhdGEgPSBzZXR0aW5ncy5kYXRhLFxuICAgICAgICAgICAgICAgIGNhY2hlID0gc2V0dGluZ3MuY2FjaGUsXG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHNldHRpbmdzLmNsYXNzZXMsXG4gICAgICAgICAgICAgICAgaW5wdXRWYWwgPSBpbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAgPSBpbnB1dC5jbG9zZXN0KGNhY2hlLmZvcm1Hcm91cCk7XG5cbiAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmVDbGFzcyhjbGFzc2VzLmhhc1N1Y2Nlc3MpO1xuICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZUNsYXNzKGNsYXNzZXMuaGFzRXJyb3IpO1xuXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBjaGVja1xuICAgICAgICAgICAgbGV0IHJlcXVpcmVkID0gaW5wdXQuYXR0cihkYXRhLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZCAmJiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAuYWRkQ2xhc3MoY2xhc3Nlcy5oYXNFcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQYXR0ZXJuIGNoZWNrXG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IGlucHV0LmF0dHIoZGF0YS5wYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXRWYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5hZGRDbGFzcyhjbGFzc2VzLmhhc0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWF0Y2ggY2hlY2tcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IGlucHV0LmRhdGEoZGF0YS5tYXRjaCk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hFbGVtZW50ID0gJChtYXRjaCk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsICE9PSBtYXRjaEVsZW1lbnQudmFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUdyb3VwLmFkZENsYXNzKGNsYXNzZXMuaGFzRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtR3JvdXAuYWRkQ2xhc3MoY2xhc3Nlcy5oYXNTdWNjZXNzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIDQuIE5BTUVTUEFDRVxuICAgIHJldHVybiBucztcbn0pKHdpbmRvdy5qUXVlcnksIHdpbmRvdy5MdWJlIHx8IHt9KTtcbiIsIi8qKlxuICogW3dpbmRvdy5MdWJlXVxuICpcbiAqIEBhdXRob3IgICAgICAgW1N0ZWYgQ29lbmVuXVxuICogQGRhdGUgICAgICAgICBbMjAxN11cbiAqIEBuYW1lc3BhY2UgICAgW0x1YmVdXG4gKiBAcmVxdWlyZXMgICAgIFtqUXVlcnldXG4gKiBAcmV2aXNpb24gICAgIFswLjFdXG4gKi9cblxud2luZG93Lkx1YmUgPSAoZnVuY3Rpb24oJCwgbnMpIHtcbiAgICAvLyAxLiBFQ01BLTI2Mi81XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gMi4gTE9BRCBDT01QT05FTlRTXG4gICAgbnMuY29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBucy5Eb20uaW5pdCgpO1xuICAgIH07XG5cbiAgICAvLyAzLiBMT0FEIERBVEFDT01QT05FTlRTXG4gICAgbnMuZGF0YUNvbXBvbmVudEluaXRpYWxpemVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhQ29tcG9uZW50cyA9ICQoJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGRhdGFDb21wb25lbnQgPSBkYXRhQ29tcG9uZW50cy5lcShpKTtcbiAgICAgICAgICAgIHZhciBkYXRhQXR0ciA9IGRhdGFDb21wb25lbnQuZGF0YSgnY29tcG9uZW50Jyk7XG4gICAgICAgICAgICBkYXRhQXR0ciA9IGRhdGFBdHRyLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhQXR0ci5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRGdW5jdGlvbiA9IG5zW2RhdGFBdHRyWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50RnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IGNvbXBvbmVudEZ1bmN0aW9uKGRhdGFDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyA0LiBPTkNFIFRIRSBET00gSVMgUkVBRFlcbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICBucy5jb21wb25lbnRzKCk7XG4gICAgICAgIG5zLmRhdGFDb21wb25lbnRJbml0aWFsaXplcigpO1xuICAgIH0pO1xuXG4gICAgLy8gNS4gVFJJR0dFUiBMT0FEIEVWRU5UIE9OIE5TXG4gICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyBvZiBqUXVlcnkgMy4wIGFzIGpRdWVyeSBubyBsb25nZXJcbiAgICAvLyAgIHN1cHBvcnRzIGxvYWQgZXZlbnQgYmluZGluZyBmb3JtIGluc2lkZSBhIHJlYWR5IGV2ZW50IGhhbmRsZXJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJC5yZWFkeS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChucykudHJpZ2dlcignbG9hZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIC8vIDYuIFJFR0lTVEVSIFNXXG4gICAgLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAvLyAgICAgLy8gUmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlciBob3N0ZWQgYXQgdGhlIHJvb3Qgb2YgdGhlXG4gICAgLy8gICAgIC8vIHNpdGUgdXNpbmcgdGhlIGRlZmF1bHQgc2NvcGUuXG4gICAgLy8gICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLy8gICAgICAgICAucmVnaXN0ZXIoJy9hcHAvc3cuanMnKVxuICAgIC8vICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5pbmZvKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2VlZGVkOicsIHJlZ2lzdHJhdGlvbik7XG4gICAgLy8gICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVwZGF0ZSgpO1xuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnU2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDonLCBlcnJvcik7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmluZm8oJ1NlcnZpY2Ugd29ya2VycyBhcmUgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAvLyB9XG5cbiAgICAvLyA4LiBHTE9CQUxJWkUgTkFNRVNQQUNFXG4gICAgcmV0dXJuIG5zO1xufSkod2luZG93LmpRdWVyeSwgd2luZG93Lkx1YmUgfHwge30pO1xuIl19
