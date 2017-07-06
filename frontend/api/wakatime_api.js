export const fetchWakaStats = () => (
    // fetch(
    //     "https://wakatime.com/share/@pgilbertschmitt/e6fb3b68-184b-4ee8-a714-9bfa2b4f954d.json",
    //     { mode: 'cors' }
    // ).then(res => (res.json()))

    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@pgilbertschmitt/10b44441-8eec-4163-a543-81708d9f13d5.json',
        dataType: 'jsonp',
        success: function (response) {
            console.log(response.data);
        }
    })
);