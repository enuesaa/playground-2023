use serde::Serialize;
use rand::SeedableRng;
use rand::rngs::StdRng;
use rand::prelude::*;

#[derive(Serialize, Debug)]
pub struct Point {
    x: u8,
    y: u8,
}

#[derive(Debug)]
pub struct Points {
    pub values: Vec<Point>,
}
impl Points {
    pub fn from_count(count: usize) -> Self {
        let mut rng: StdRng = SeedableRng::seed_from_u64(99);
        let mut points = Points {
            values: Vec::with_capacity(count),
        };
        for _ in 0..count {
            points.values.push(Point {
                x: rng.gen::<u8>(),
                y: rng.gen::<u8>(),
            });
        };
        points
    }
}

#[test]
fn points_count_test() {
    let points = Points::from_count(5);
    assert_eq!(points.values.len(), 5);
}
