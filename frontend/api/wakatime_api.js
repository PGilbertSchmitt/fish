export const fetchWakaStats = () => (
    fetch("https://wakatime.com/share/@pgilbertschmitt/e6fb3b68-184b-4ee8-a714-9bfa2b4f954d.json")
        .then(res => (res.json()))
);