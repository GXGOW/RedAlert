# Red Alert

![Red Alert logo](http://www.kljhamme.be/redalert/images/logo.png)

Source code van de website voor Red Alert, een fuif georganiseerd door KLJ Hamme-Center. Deze code is vrij te (her)gebruiken zolang deze repository als bron wordt vermeld en alle wijzigingen ook gepubliceerd worden. Zie [LICENSE.txt](https://github.com/GXGOW/RedAlert/blob/master/LICENSE.txt) voor meer info.

Voortgang en overzicht van nieuwe functies en bugfixes zijn beschikbaar op [Trello](https://trello.com/b/vrjoJUx3).
## Vereiste software

Om dit project te kunnen bewerken/bekijken, is volgende software vereist

* [NodeJS](https://nodejs.org/en/download/current) (>= 8.4.0)

* [yarn](https://github.com/yarnpkg/yarn/releases) (>= 1.0.1)

* [php](http://php.net/downloads.php) (>= 5.5.38)

* [Ruby](https://www.ruby-lang.org/en/downloads) (>= 2.4.1)

## Project initialiseren

Voer volgende stappen uit

```bash
# Clone de repository
git clone https://github.com/GXGOW/RedAlert.git

# Navigeer naar de map
cd RedAlert

# Download de vereiste node_modules met Yarn (dit kan even duren)
yarn install

# Installeer gulp globaal (hierdoor is enkel 'gulp' voldoende om de gulp-scripts te runnen i.p.v. 'npm run gulp')
yarn global add gulp

# Installeer de ruby-gem sass (deze wordt gebruikt in het gulp-script)

gem install sass

# Gulp-script runnen om stylesheets en scripts te compileren naar build/functions.min.js
gulp

```

Zo, veel plezier ermee!