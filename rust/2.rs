fn main() {
    let mut a: i32 = 1;
    let mut b: i32 = 2;
    let mut total: i32 = b;
    while b < 4000000 {
        let temp: i32 = a + b;
        a = b;
        b = temp;
        if b % 2 == 0 { total += b }
    }
    println!("{}", total);
}