var config = {
    style: 'mapbox://styles/zacstanley/ck8p0d3ik0nsc1io94auvuxll',
    accessToken: 'pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA',
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
            image: 'images/DZZ2k2kVMAAux8a.jpg',
            description: '<b>Length and Difficulty</b><br>6.3 miles, Difficult<br><br><b>Hike Description</b><br>After departing the Rock Spring trailhead, this hike is all about views, views, and more views. Enjoy everything Mt. Tam has to offer, from sunny open serpentine areas to shady forests, as this hike takes you through a variety of terrains. The magical Azalea Meadow and both Northside Trails offer unparalleled views of the north side of the mountain and the Point Reyes Peninsula. West Peak itself was once the highest point on Mt. Tam before it was leveled to create an Air Force Station during the Cold War. A <a href="https://www.onetam.org/our-work/west-peak-restoration">new vision for this site</a> includes clean-up of what’s left of the military’s time there, habitat restoration, and public access improvements. <br><br><b>Get the Latest</b><br>Trail closures, regulations, and other information can be found at <a href="https://www.marinwater.org/"> Marin Municipal Water District</a><br><br><b>West Peak Needs You!</b><br><a href="https://www.onetam.org/our-work/west-peak-restoration">Learn More!</a> and <a href="https://secure3.convio.net/ggnpc/site/SPageServer?pagename=Donate_to_ONE_TAM">and help heal the damage</a> done to Mt. Tam’s once-highest peak.<br><br>Cell service can be spotty on Mt. Tam. We strongly suggest you download this map and description (link to do that) before hitting the trail!' ,
            location: {
                center: [-122.60412, 37.92220],
                zoom: 8,
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
