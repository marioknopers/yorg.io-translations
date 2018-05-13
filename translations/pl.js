// STARTING TRANSLATION

export const TRANSLATIONS_PL = {

    // Welcome screen

    "welcome_introduction_header": "Intro",
    "welcome_introduction": "Witaj w yorg.io, gra o dostarczanie surowców i obraniać twoją gre od zombiaków! Twój cel jest żeby przetrwać aż długo jak można. Czy możesz pobić wynik twoich przyjaciół?",

    "loading_game": "Ładowanie Gry . . .",
    "play_button": "Graj",
    "tutorial_button": "Szkolenie",

    "playername_input_placeholder": "Twoja nazwa",

    "discord": "Discord",
    "reddit": "Reddit",
    "twitter": "Twitter",
    "wiki": "Wikipedia",
    "featured_youtuber": "Popularne YT",

    "thirdparty_hint_header": "Pomysl o graniu bezpośredniu na YORG.io.
    "thirdparty_hint": "Ty teraz graż na obcej stronie. Pomyśl o granie bezpośredniu na YORG.io dla ulepszone granie! <b>Kliknij tutaj</b> żeby odwiedzić YORG.io.",

    "adblock_hint_header": "Prosze wyłącz swój adblocker",
    "adblock_hint": "YORG.io jest darmowe do grania, ale prosze pomyśł o wyłączeniu swój adblocker żeby pomuc nam! <b>Kliknij tutaj</b> żeby dowiedzieć się jak to wyłączyć.",

    "changelog": "Dziennik Zmian",
    "view_full_changelog": "Zobacz pełny dziennik zmian",

    "footer_licenses_partners": "Licensja & Partnerzy",
    "footer_more_io_games": "Więcej .io Gry",
    "footer_press_kit": "Kit Logo",
    "footer_imprint": "Imprint",
    "cookie_hint": `Ta strona używa ciastka żeby zapewnić ty dostaniesz najlepsze granie
        na naszej stronie. <a href='https://cookiesandyou.com/' target='_blank'>Ucz się więcej</a>`,

    "disable_adblock_title": "How to: Disabling adblock",
    "disable_adblock_instructions": `
        You can find a visual guide <a href="http://cdn.epicbundle.com/image/article/adblock_how-to_disable_ad-blocker_turn-off.png" target="_blank">here</a>.<br />
        <br />
        <b>AdBlock Plus / ABP</b><br />
        1. Click on the AdBlock Plus extension icon.<br />
        2. Click "Enabled on this site" to disable AdBlock for the current site.<br />
        <br />
        <b>uBlock Origin</b><br />
        1. Click on the uBlock extension icon.<br />
        2. Click the blue "power" button to disable AdBlock for the current site<br />
        <br />
        <b>AdBlock</b>
        <br />
        1. Click on the AdBlock extension icon.<br />
        2. Click "Don‘t run on this domain" to disable AdBlock for the current site.<br /><br />
        Thank you for supporting us!
    `,

    "report_bug_button": "Zgłoś Bug albo Sugestie",
    "report_bug_title": "Znalezłeś Bug albo sugestie?",
    "rebort_bug_inner": `
        Jak myślisz ty znalezłeś bug, albo masz pomysły na ulepszenia, są kilka możliwości:<br /><br />
        <ul>
            <li>Dołącz officialny Discord! <a href="<%= htmlWebpackPlugin.options.env.discordLink %>" target="_blank">Discord</a></li>
            <li>Odwiedż <a href="https://www.reddit.com/r/yorgio/" target="_blank">YORG.io subreddit</a></li>
            <li>Napisz email do <a href="mailto:feedback@yorg.io">feedback@yorg.io</a></li>
        </ul>
        <br />
        Jak chcesz zgłośić bug, prosze <b>mieć otwartą konsole</b>. Ty możesz dostać ją by przycisnąc F12 i wybrać <i>Console</i> tab.
    `,

    "close_dialog": "Zamknij",

    // Restart dialog
    "restart_game_confirm": "Czy jesteś pewny ty chcesz zrestartować gre? Jak zrestartujesz, ty <b>stracisz swój postęp w grze!</b>",
    "restart_game_button": "Zrestartuj",
    "restart_continue_playing": "Graj Dalej",

    // Ingame

    // Visualizers
    "crystals_per_sec": "Kryształy na sekunde",

    "cannon": "Armata",
    "arrow": "Strzała",
    "lightning": "Błyskawica",

    "iron": "Żelazo",
    "wood": "Drewno",
    "uranium": "Uran",
    "steel": "Stal",
    "trunks": "Pnie Drzew",
    "power": "Energia",

    // Game time

    "pause_not_possible_during_night": Pauza nie jest możliwa w nocy!!", 
    "pause_not_possible_before_base": "Pauza nie jest możliwa przed postawieniu bazy!",

    "fastforward_disabled_while_boss": "Przyspieszane jest wyłączony gdy boss żyje!",
    "fastforward_not_possible_before_base": "Przyszpieszanie nie jest możliwe przed postawienu bazy!",

    "pause_game": "Pauza gry",
    "pause_game_desc": "To pauzuje gre",

    "regular_speed": "Normalna szybkość",
    "regular_speed_desc": "To zmiena szybkość gry na normalną",

    "fast_forward": "Przyszpieszanie",
    "fast_forward_desc": "To przyszpiesza gre",

    // Menu buttons

    "keyboard_shortcuts": "Skróty Klawiszowe",
    "keyboard_shortcuts_desc": "Show the keyboard shortcut dialog",

    "restart_game": "Restart Game",
    "restart_game_desc": "Allows you to restart the game",

    "toggle_fullscreen": "Toggle Fullscreen",
    "toggle_fullscreen_desc": "Allows to toggle fullscreen, does not work on all pages!",

    // Views

    "defense_view": "Tower Range View",
    "defense_view_desc": "Showing the range of all defensive towers",

    "transport_view": "Transport Network",
    "transport_view_desc": "Showing resource transport ways. Mouseover a building to see its transport ways.",

    "processor_usage_view": "Utilization View",
    "processor_usage_view_desc": "Showing the current utilization of all your factories. Green indicates that the production is at full capacity, yellow or red means that the production is not running at full speed.",

    // Buildings bar

    "prefix_hotkey": "Hotkey: ",
    "no_cost": "no cost",

    // Building tooltip
    "level": "Level",

    "stat_health": "Health",
    "stat_damage": "Damage",
    "stat_throughput": "Produce /s",
    "stat_radius": "Radius",
    "stat_outcome": "Amount",
    "stat_transportSpeed": "Speed",
    "stat_spread": "Spread",
    "stat_shootsPerSecond": "Fire rate",
    "stat_storage": "Storage",
    "stat_consumeAmount": "Consumes",

    "can_not_sell_building": "You can not sell this building",

    "sell_for": "Sell for",

    "upgrade": "Upgrade",
    "upgrade_all": "Upgrade all",

    "max_out": "Max out",
    "max_out_all": "Max out all",

    "upgrade_base_to_upgrade_building": "Upgrade your Base to upgrade this building!",
    "no_further_upgrades": "No further upgrade possible!",

    // Buildings
    "building_wall": "Wall",
    "building_wall_desc": "Protects your base from zombies by blocking their movement",

    "building_arrowFactory": "Arrow Factory",
    "building_arrowFactory_desc": "Produces arrows out of steel and tree trunks",

    "building_arrowTower": "Arrow Tower",
    "building_arrowTower_desc": "Single target tower which shoots arrows at zombies",

    "building_cannon": "Cannon",
    "building_cannon_desc": "Shoots cannonballs which explode when hitting zombies",

    "building_cannonballProducer": "Cannon Ball Factory",
    "building_cannonballProducer_desc": "Produces cannon balls out of 2 unprocessed iron",

    "building_goldMine": "Crystal Mine",
    "building_goldMine_desc": "Extracts crystals from crystal orbs. Deliver them to your base",
    "error_place_next_to_crystal": "Place next to a crystal",

    "building_harvester": "Harvester",
    "building_harvester_desc": "Harvests forests and produces unprocessed wood",
    "error_place_next_to_tree": "Place next to a tree",

    "building_ironMine": "Iron Mine",
    "building_ironMine_desc": "Extracts unprocessed iron from iron ores",
    "error_place_next_to_iron_ore": "Place next to an iron ore",

    "building_lightningTower": "Lightning Tower",
    "building_lightningTower_desc": "Shoots lightning bolts on enemies which then spread to other enemies",

    "building_nuclearStation": "Nuclear Reactor",
    "building_nuclearStation_desc": "Uses uranium to produce nuclear power",

    "building_playerBase": "Base",
    "building_playerBase_desc": "Your base - Protect it, once destroyed the game is lost",
    "error_only_one_base": "You may only place one Base",
    "error_base_unreachable": "Base is unreachable",

    "building_steelFactory": "Steel Factory",
    "building_steelFactory_desc": "Produces steel out of 2 unprocessed wood and 1 iron",

    "building_transporter": "Transporter",
    "building_transporter_desc": "Transports resources within its range of influence. Chainable.",

    "building_uraniumMine": "Uranium Mine",
    "building_uraniumMine_desc": "Extracts uranium from uranium ores",
    "error_place_next_to_uranium_ore": "Place next to a uranium ore",

    "building_woodProcessor": "Sawmill",
    "building_woodProcessor_desc": "Produces tree trunks out of 2 unprocessed wood",

    // Building requirements
    "place_dependent_building_first": "Place a %1 first!",
    "upgrade_base_to_level_first": "Upgrade your base to level %1 to unlock!",
    "upgrade_base_first": "Upgrade your base first!",
    "can_not_afford_upgrade": "Can not afford upgrade",
    "already_at_max_level": "Already at maximum level",
    "not_in_map_bounds": "Not in map bounds",
    "can_not_afford": "Can't afford",
    "space_already_occupied": "Space is already occupied",
    "tile_occupied_by_enemies": "Tile is occupied by enemies!",

    // Zombie waves timers
    "first_zombie_wave_in": "First zombie wave in",
    "zombie_boss_in": "Zombie Boss in",

    "minute_suffix": "m",
    "seconds_suffix": "s",

    // Leaderboard
    "leaderboard_rank": "#",
    "leaderboard_name": "Name",
    "leaderboard_day": "Day",

    // Keyboard shortcuts dialog

    "kb_section_building": "Building",
    "kb_section_upgrading": "Upgrading",
    "kb_section_movement": "Movement",
    "kb_section_misc": "Misc",

    "kb_place_multiple": "Place Multiple",
    "kb_cancel_placement": "Cancel Placement",
    "kb_sell_building": "Sell Building",

    "kb_move": "Move",
    "kb_move_alternate": "Move #2",
    "kb_mouse_hint": "Hint: You can also move by dragging the map with your mouse",

    "zoom": "Zoom",
    "mouse_wheel": "Mouse Wheel",

    "key_shift": "Shift",
    "key_esc": "Esc",
    "key_alt": "Alt",
    "key_space": "Space"


}
