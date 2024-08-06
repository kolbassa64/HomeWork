function exchange(amount, from, to) {
    const roubleRate = [85, 92, 0.2, 12, 62 ]; 
    [usd, eur, amd, dkk, cad ]= roubleRate;
    switch (from) {
        case 'usd':
            return (from / to) * amount;
        case 'eur':
            return (from / to) * amount;
        case 'amd':
            return (from / to) * amount;
        case 'dkk':
            return (from / to) * amount;
        case 'cad':
            return (from / to) * amount;
        default:
            return NaN;
    }
}