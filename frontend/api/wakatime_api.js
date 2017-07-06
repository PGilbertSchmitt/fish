const activityUrl = "https://wakatime.com/share/@pgilbertschmitt/10b44441-8eec-4163-a543-81708d9f13d5.json";

export const fetchActivity = () => (
    $.ajax({
        type: 'GET',
        url: activityUrl,
        dataType: 'jsonp'
    })
);