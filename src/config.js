var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJjazhvc3pnMjIxOHN1M2ZuMmk1cHRmeHh0In0.xE_iF1vZgS5uvYA7ZgeYcQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: 'One Tam Featured Hikes',
    subtitle: '6 hikes on Mount Tamalpais specially curated by our team',
    byline: 'By Zac Stanley, GIS Specialist - Golden Gate National Parks Conservancy',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'westPeak',
            title: 'West Peak Loop',
            image: 'images/wp.jpg',
            description: 'After departing the Rock Spring trailhead, this hike is all about views, views, and more views. Enjoy everything Mt. Tam has to offer, from sunny open serpentine areas to shady forests, as this hike takes you through a variety of terrains. The magical Azalea Meadow and both Northside Trails offer unparalleled views of the north side of the mountain and the Point Reyes Peninsula. West Peak itself was once the highest point on Mt. Tam before it was leveled to create an Air Force Station during the Cold War. A <a href=”https://www.onetam.org/our-work/west-peak-restoration”>new vision for this site</a> includes clean-up of what’s left of the military’s time there, habitat restoration, and public access improvements. ',
            location: {
                center: [--122.60412, 37.92220],
                zoom: 13.92,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'westpeak',
            title: 'West Peak Loop',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
