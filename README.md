# Pomodoro-timer
## LINK : https://zakinane.github.io/Pomodoro-timer/
En utilisant [[Electron]].
Il aurait un style pixel art ! ça serait cool.

### Fonctionnalités :
#### Start :
- 3 phases :
	- **Pomodoro :** 25min normalement mais configurable
	- **Pause courte :** 5min normalement /////
	- **Pause longue :** 20min normalement //
- Bouton pour faire pause sur le timer
- Bruits de touches
- Ajouter une liste de tasks à cocher (à chaque cycle)
- Streak
#### Paramètres :
- Paramètres de style (vert, bleu, rouge...)
- Mode no stop
-  Mode musique (ouvre des liens google musique en fonction du mode ex: concentration = mélodie, relax = chansons, entre deux = doux etc)
		**Infos :** 
			I used [https://www.npmjs.com/package/ytdl-core](https://www.npmjs.com/package/ytdl-core) for getting the audio source and stream. Then pass it to [https://www.npmjs.com/package/fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to format it to mp3 and return the audio to my website. :)) It doesn't download anything, just streaming.
			[ytmusic-api - npm](https://www.npmjs.com/package/ytmusic-api)
- Stats (temps dans l'app, heures de travails, nombre de tâches accompli, musique écoutées etc)
#### Autres :

- Timer H24 affiché en haut de l'écran (basse opacité et option pour réduire)
- Shortcuts 
- Version mobile avec [[Apache Cordova|Cordova]]

#### Idées abstraites :
- Relié à [[Obsidian]] (mes taches à faire)



Related : [[Pomodoro]], [[Mes sites]], [[Electron]]
