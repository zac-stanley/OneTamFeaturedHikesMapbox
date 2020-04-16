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
                center: [-122.59680, 37.92478],
                zoom: 14.52,
                pitch: 0,
                bearing: -20
            },
            onChapterEnter: [
             //    {
             //        layer: 'onetamfeaturedtrailsdissolved-js',
             //        opacity: 1
            //     }
            ],
            onChapterExit: [
             //   {
             //       layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 0
             //   }
            ]
        },
        {
            id: 'potreromeadows',
            title: 'Potrero Meadows Loop',
            image: 'images/MOTA_170920_AG_4.jpg',
            description:'<b>Length and Difficulty</b><br>3.9 miles, Moderate<br><br><b>Amenities</b><br>No water, but portable restrooms at the Rock Spring trailhead. Picnic areas available along the route.<br><br><b>Hike Description</b><br>This hike hugs cool, shady Cataract Creek for nearly a mile and offers a mix of open grasslands and forests along the rest of the route. Beautiful Potrero Meadow itself is the largest wet meadow on Mt. Tam. Small braided channels and depressions support a diverse array of aquatic plants and animals, making this rare habitat a destination for botanists and hikers alike. The meadow is bookended by the popular Potrero and Rifle Camp picnic areas that offer good spots for a bite or quick rest before heading back to the Rock Spring trailhead where you began.<br><br><b>Get the Latest</b><br>Trail closures, regulations, and other information can be found at <a href="https://www.marinwater.org/"> Marin Municipal Water District</a><br><br><a href= “https://www.onetam.org/our-work/potrero-meadow-restoration”>Learn more</a>about Potrero Meadow and <a href="https://secure3.convio.net/ggnpc/site/SPageServer?pagename=Donate_to_ONE_TAM">support</a> the restoration this rare wet meadow and its stunning wildflowers and abundant wildlife.<br><br>Cell service can be spotty on Mt. Tam. We strongly suggest you download this map and description (link to do that) before hitting the trail!',
            location: {
                center: [ -122.61160, 37.91751],
                zoom: 15.1,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
             //   {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 1
            //    }
           ],
            onChapterExit: [
              //  {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
              //      opacity: 0
              //  }
            ]
        },
        {
            id: 'pantollrangerstation',
            title: 'Pantoll Ranger Station Loop',
            image: 'images/MOTA_150818_PMM_1143.jpg',
            description:'<b>Length and Difficulty</b><br>2.0 miles, Moderate<br><br><b>Amenities</b><br>Bathrooms and water available at the Pantoll Ranger Station trailhead.<br><br><b>Hike Description</b><br>This short hike immerses you in Mt. Tam’s majestic redwoods, shady Douglas-fir and tanoak forests, and sunny grasslands. The route also features several gems from Mt. Tam’s past including the Old Stage Road once used by wagons and coaches traveling from Mill Valley and the recently renovated and reopened historic Bootjack Camp. Breathtaking views of San Francisco and the bay await you from the chiseled stone seats at the equally historic Mountain Theatre.<br><br><b>Get the Latest</b><br>Trail closures, regulations, and other information can be found at <a href="https://www.parks.ca.gov/?page_id=471">California State Parks</a>.<br><br>Cell service can be spotty on Mt. Tam. We strongly suggest you download this map and description (link to do that) before hitting the trail!',
            location: {
                center: [-122.60100, 37.90829 ],
                zoom: 15.80,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
             //   {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 1
            //    }
           ],
            onChapterExit: [
              //  {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
              //      opacity: 0
              //  }
            ]
        },
        {
            id: 'mountainhome',
            title: 'Mountain Home Inn Loop',
            image: 'images/MOTA_140418_KW_21.jpg',
            description:'<b>Length and Difficulty</b><br>8.2 miles, Moderate/Difficult<br><br><b>Hike Description</b><br>The lovely canyon along Camp Eastwood Road crosses bubbling creeks and passes through deep redwood forest groves. Enjoy views of the Pacific Ocean from the Redwood Creek Trail, as well as a mix of suny grasslands and forests, including even more redwoods! Includes the lovely Dipsea and Sun trails as you exit Muir Woods and ascend back toward Panoramic Highway If you’re here on a Sunday, stop at the Alpine Club for a drink and a snack!<br><br>Cell service can be spotty on Mt. Tam. We strongly suggest you download this map and description (link to do that) before hitting the trail!',
            location: {
                center: [-122.56708, 37.90185],
                zoom: 14.46,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
             //   {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 1
            //    }
           ],
            onChapterExit: [
              //  {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
              //      opacity: 0
              //  }
            ]
        },
        {
            id: 'redwoodcrk',
            title: 'Redwood Creek Trail Loop',
            image: 'images/MUBE_150321_ATB_134.jpg',
            description:'<b>Length and Difficulty</b><br>6.6 miles, Moderate/Difficult<br><br><b>Amenities</b><br>Restrooms and water available at Muir Beach.<br><br><b>Hike Description</b><br>Take a moment to experience the vibrant creek, wetlands, and dunes at the 46-acre restoration site at Muir Beach. Farther upstream, Redwood Creek Trail offers riparian forest and dappled oak woodlands. <a href="https://www.onetam.org/our-work/redwood-creek-trail-realignment">One Tam will be making improvements to the trail and bridges</a> here in the near future for both hikers and equestrians. Crossing the hillside along the Miwok Trail allows for spectacular ocean views, and the grasslands and coastal scrub on the also-restored multi-use <a href="https://www.parksconservancy.org/projects/dias-ridge">Dias Ridge Trail</a> are home to many birds and other wildlife.<br><br><b>Learn More</b><br>Discover  <a href="https://www.onetam.org/our-work/redwood-creek-trail-realignment">what’s in store for the Redwood Creek Trail</a> and  <a href="https://secure3.convio.net/ggnpc/site/SPageServer?pagename=Donate_to_ONE_TAM">how you can help!</a>',
            location: {
                center: [-122.55879, 37.87262],
                zoom: 14.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
             //   {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 1
            //    }
           ],
            onChapterExit: [
              //  {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
              //      opacity: 0
              //  }
            ]
        },
        {
            id: 'bothinmrsh',
            title: 'Bothin Marsh Out and Back',
            image: 'images/BOMA_20191121_PMM_0254.jpg',
            description:'<b>Length and Difficulty</b><br>2.2 miles, Easy<br><br><b>Amenities</b><br>No water, but restrooms are available at the trailhead.<br><br><b>Hike Description</b><br>The Sausalito-Mill Valley Multi-Use Path takes you across this beautiful and well-loved stretch of Bothin Marsh Open Space Preserve’s shoreline. A walk along the flat, paved trail skirts the Preserve’s 106 acres of open water, mudflats, and tidal marsh, which are home to hundreds of thousands of waterbirds and shorebirds that live here year-round, as well as the over 400 migratory species that pass through. One Tam is <a href= "https://www.onetam.org/our-work/bothin-marsh">currently working hard with its community partners</a> to ensure that the the low-lying marsh and trail are able to withstand sea level rise in the near future.<br><br><b>Learn More</b>Find out more about how <a href= "https://www.onetam.org/our-work/bothin-marsh">we are working to save Bothin Marsh</a> for the people and wildlife that depend upon it and <a href="https://secure3.convio.net/ggnpc/site/SPageServer?pagename=Donate_to_ONE_TAM">how you can help!</a>',

            location: {
                center: [-122.51884, 37.89061],
                zoom: 14.62,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
             //   {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
             //       opacity: 1
            //    }
           ],
            onChapterExit: [
              //  {
              //      layer: 'onetamfeaturedtrailsdissolved-js',
              //      opacity: 0
              //  }
            ]
        },

    ]
};
