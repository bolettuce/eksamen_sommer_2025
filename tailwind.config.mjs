/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        fontFamily: {
            sans: ['Nykredit Sans', 'sans-serif'],
          },
          
        /* Tilføj dit typografiske hierarki herunder */
        extend: {
            fontSize: {
              'display-01-desktop': ['10rem', { lineHeight: '10rem', letterSpacing: '-0.125rem' }],
              'display-02-desktop': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.1125rem' }],
              'heading-01-desktop': ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.09375rem' }],
              'heading-02-desktop': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.09375rem' }],
              'heading-03-desktop': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.09375rem' }],
              'heading-04-desktop': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.09375rem' }],
              'heading-05-desktop': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.075rem' }],
              'subheading-01-desktop': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.075rem' }],
              'subheading-02-desktop': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
              'body-xxl-desktop': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0' }],
              'body-xl-desktop': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
              'body-lg-desktop': ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '0' }],
              'body-base-desktop': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
          
              'display-01-mobile': ['7.5rem', { lineHeight: '8.125rem', letterSpacing: '-0.125rem' }],
              'display-02-mobile': ['3.375rem', { lineHeight: '3.75rem', letterSpacing: '-0.1125rem' }],
              'heading-01-mobile': ['2.625rem', { lineHeight: '2.875rem', letterSpacing: '-0.09375rem' }],
              'heading-02-mobile': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.09375rem' }],
              'heading-03-mobile': ['1.875rem', { lineHeight: '2.125rem', letterSpacing: '-0.09375rem' }],
              'heading-04-mobile': ['1.6875rem', { lineHeight: '1.875rem', letterSpacing: '-0.09375rem' }],
              'heading-05-mobile': ['1.5rem', { lineHeight: '1.625rem', letterSpacing: '-0.075rem' }],
              'subheading-01-mobile': ['1.125rem', { lineHeight: '1.375rem', letterSpacing: '0.01125rem' }],
              'subheading-02-mobile': ['0.9375rem', { lineHeight: '1.125rem', letterSpacing: '0' }],
              'body-xxl-mobile': ['1.125rem', { lineHeight: '1.375rem', letterSpacing: '0' }],
              'body-xl-mobile': ['0.9375rem', { lineHeight: '1.125rem', letterSpacing: '0' }],
              'body-lg-mobile': ['0.875rem', { lineHeight: '1.0625rem', letterSpacing: '0' }],
              'body-base-mobile': ['0.75rem', { lineHeight: '0.875rem', letterSpacing: '0' }],
            },
            fontWeight: {
                light: '300',
                regular: '400',
                medium: '500',
                bold: '600',
                extrabold: '700',
              },              
          },

        /* Borders - borderstørrelser herunder */
        borderWidth: {
            xs: '0.5px',
            s: '1px',
            m: '1.5px',
            l: '2px',
            xl: '4px',
          },

        /* Border radius størrelser herunder */
        borderRadius: {
            xs: '4px',
            s: '8px',
            m: '12px',
            l: '16px',
            circle: '50px',
            pill: '999px',
          },


        extend: {
            keyframes: {
                'spin360': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
                'fade-up': {
                  '0%': { opacity: '0', transform: 'translateY(20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
                },

              },
              animation: {
                'spin-once': 'spin360 1s ease-in-out',
                'fade-up': 'fade-up 0.5s ease-out forwards',
              },

              
              
            spacing: {
                '2xs': '2px',
                'xs': '4px',
                's': '8px',
                'm': '12px',
                'l': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                '4xl': '40px',
                '5xl': '48px',
                '6xl': '72px',
                '7xl': '96px',
                '8xl': '124px',
                '9xl': '160px',
              },

            colors: {
              horisont: {
                100: '#cfd2e6',
                200: '#9fa5cd',
                300: '#6f78b4',
                400: '#3f4b9b',
                500: '#0f1e82',
                600: '#0c1868',
                700: '#09124e',
                800: '#060c34',
                900: '#03061a',
              },
              hav: {
                100: '#cdcedb',
                200: '#9c9db7',
                300: '#6a6b92',
                400: '#393a6e',
                500: '#07094a',
                600: '#06073b',
                700: '#04052c',
                800: '#03041e',
                900: '#01020f',
              },
              valmue: {
                100: '#fed4dc',
                200: '#fda8b8',
                300: '#fd7d95',
                400: '#fc5171',
                500: '#fb264e',
                600: '#c91e3e',
                700: '#97172f',
                800: '#640f1f',
                900: '#320810',
              },
              himmel: {
                100: '#e1f6f9',
                200: '#c3edf2',
                300: '#a4e4ec',
                400: '#86dbe5',
                500: '#68d2df',
                600: '#53a8b2',
                700: '#3e7e86',
                800: '#2a5459',
                900: '#152a2d',
              },
              lysgul: {
                100: '#fff7e1',
                200: '#ffeec3',
                300: '#ffe6a4',
                400: '#ffdd86',
                500: '#ffd568',
                600: '#ccaa53',
                700: '#99803e',
                800: '#66552a',
                900: '#332b15',
              },
              orange: {
                100: '#ffefe0',
                200: '#ffdec1',
                300: '#fecea1',
                400: '#febd82',
                500: '#fead63',
                600: '#cb8a4f',
                700: '#98683b',
                800: '#664528',
                900: '#332314',
              },
              grøn: {
                100: '#dbf2ed',
                200: '#b6e4da',
                300: '#92d7c8',
                400: '#6dc9b5',
                500: '#49bca3',
                600: '#3a9682',
                700: '#2c7162',
                800: '#1d4b41',
                900: '#0f2621',
              },
              lysblå: {
                100: '#d9e9f8',
                200: '#b3d3f1',
                300: '#8dbeea',
                400: '#67a8e3',
                500: '#4192dc',
                600: '#3475b0',
                700: '#275884',
                800: '#1a3a58',
                900: '#0d1d2c',
              },
              lilla: {
                100: '#e7deed',
                200: '#cfbdda',
                300: '#b79dc8',
                400: '#9f7cb5',
                500: '#875ba3',
                600: '#6c4982',
                700: '#513762',
                800: '#362441',
                900: '#1b1221',
              },
              sand: {
                100: '#fbfafa',
                200: '#f7f5f5',
                300: '#f4f1ef',
                400: '#f0ecea',
                500: '#ece7e5',
                600: '#bdb9b7',
                700: '#8e8b89',
                800: '#5e5c5c',
                900: '#2f2e2e',
              },
              sten: {
                100: '#f5f3f1',
                200: '#eae7e3',
                300: '#e0dad4',
                400: '#d5cec6',
                500: '#cbc2b8',
                600: '#a29b93',
                700: '#7a746e',
                800: '#514e4a',
                900: '#292725',
              },
              havbund: {
                100: '#e9e8e7',
                200: '#d4d1ce',
                300: '#bebab6',
                400: '#a9a39d',
                500: '#938c85',
                600: '#76706a',
                700: '#585450',
                800: '#3b3835',
                900: '#1d1c1b',
              },
              black: '#000000',
              white: '#ffffff',
            },
          }
          
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}