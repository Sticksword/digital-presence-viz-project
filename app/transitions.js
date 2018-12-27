export default function() {
  this.transition(
    this.fromRoute('pillars.index'),
    this.toRoute('pillars.learning'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // this.transition(
  //   this.hasClass('carousel'),
  //   this.fromValue(0),
  //   this.toValue(1),
  //   this.use('toLeft', { duration: 500 }),
  //   this.reverse('toRight')
  // );

  // this.transition(
  //   this.hasClass('carousel'),
  //   this.fromValue(1),
  //   this.toValue(2),
  //   this.use('toLeft', { duration: 500 }),
  //   this.reverse('toRight')
  // );

};
