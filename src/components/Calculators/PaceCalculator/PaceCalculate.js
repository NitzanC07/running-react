class PaceCalculator {
    constructor(distance, hours, minutes, seconds, intensity) {
        this._distance_m = distance;
        this._distance_km = this._distance_m / 1000;
        this._totalTimeMintues = Number(hours*60) + Number(minutes) + Number(seconds/60);
        this._intensity = intensity;
    }

    _roundNumber(value, decimals){
        var shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    _paceZones(pace) {
        const descriptionZones = ['אימון שחרור / התאושות', 'אימון אירובי קל', 'אימון אירובי, קצב טמפו', 'אימון אנאירובי מתון', 'אימון אנאירובי עצים'];
        const percentages = {'zone3': [1.2, 1.1, 1, 0.95, 0.80], 'zone4': [1.25, 1.15, 1.05, 1, 0.85], 'zone5': [1.45, 1.35, 1.25, 1.15, 1]};
        const zones = [];
        for (let z = 0; z < percentages[this._intensity].length; z++) {
            const zoneMins = Math.floor(((pace) * percentages[this._intensity][z]) / 1);
            const zoneSecs = Math.floor((((pace) * percentages[this._intensity][z]) % 1) * 60);
            const paceTarget = `${zoneMins.toString().padStart(2, '0')}:${zoneSecs.toString().padStart(2, '0')}`;
            const speedTarget = this._roundNumber((60 / (zoneMins + (zoneSecs/60))), 2);
            zones.push([descriptionZones, paceTarget, speedTarget])
        }
        return zones;
    }

    compute() {
        const pace = this._roundNumber((this._totalTimeMintues / this._distance_km), 2);
        const paceMins = Math.floor(pace / 1);
        const paceSec = Math.floor((pace % 1)*60);
        const zones = this._paceZones(pace);
        const paceResult = `${paceMins.toString().padStart(2, '0')}:${paceSec.toString().padStart(2, '0')}`
        const speed = this._roundNumber((this._distance_km / (this._totalTimeMintues / 60)), 2);
        return { 
            pace: paceResult,
            speed: speed,
            targets: zones
        }
    }
}

export default PaceCalculator;