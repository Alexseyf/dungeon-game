export abstract class Character {
    constructor(
    protected _name: string,
    protected _ac: number,
    protected _maxHp: number,
    protected _attack: number,
    protected _damage: number,
    protected _cureValue: number,
    protected _hp: number
    ) {}

    public abstract makeAttack(target: any): void;

    public abstract usePotion(target: any): void;

    public get name(): string {
        return this._name;
    }

    public get ac(): number {
        return this._ac;
    }

    public get maxHp(): number {
        return this._maxHp;
    }

    public get hp(): number {
        return this._hp;
    }

    public set hp(hp: number) {
        this._hp = hp;
    }

    public get attack(): number {
        return this._attack;
    }

    public get damage(): number {
        return this._damage;
    }

    public get cureValue(): number {
        return this._cureValue;
    }

    public status(): string {
        return `${this._name} ${this._hp.toFixed(0)}/${this._maxHp} HP.`;
    }
}