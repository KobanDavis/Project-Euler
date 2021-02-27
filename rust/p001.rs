fn main() {
    let mut vec: Vec<i32> = Vec::new();
    for i in 1..1000 {
        if i % 3 == 0 || i % 5 == 0 {vec.push(i)}
    }
    let mut total: i32 = 0;
    for i in vec {
        total += i;
    }
    println!("{}", total)
}